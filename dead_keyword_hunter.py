# DeadKeywordHunter v1.0 - Custom Tool for sidd aesthetics
# INPUT: keyword (e.g., "garage door repair")
# OUTPUT: Domains from search results that:
# - Return 404 or cannot be reached
# - Are unregistered (available to buy)

import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse
import socket
import whois
import time

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/90.0.4430.212"
}

# --- STEP 1: Scrape Google Search Results (Top 100 URLs) ---
def google_search_urls(query, limit=100):
    urls = []
    for start in range(0, limit, 10):
        url = f"https://www.google.com/search?q={query.replace(' ', '+')}&start={start}"
        res = requests.get(url, headers=HEADERS)
        soup = BeautifulSoup(res.text, "html.parser")
        for link in soup.find_all("a"):
            href = link.get("href")
            if href and href.startswith("/url?q="):
                raw_url = href.split("/url?q=")[1].split("&sa=")[0]
                parsed = urlparse(raw_url)
                if parsed.scheme.startswith("http"):
                    urls.append(raw_url)
        time.sleep(1)
    return list(set(urls))

# --- STEP 2: Check URL Reachability ---
def check_url_status(url):
    try:
        res = requests.get(url, timeout=10)
        if res.status_code == 404:
            return "404"
        elif res.status_code >= 500:
            return f"ServerError {res.status_code}"
        else:
            return "Alive"
    except requests.exceptions.RequestException:
        return "Unreachable"

# --- STEP 3: Extract Root Domain ---
def get_root_domain(url):
    parsed = urlparse(url)
    return parsed.netloc.replace("www.", "")

# --- STEP 4: Domain Availability Checker ---
def is_domain_available(domain):
    try:
        data = whois.whois(domain)
        if not data.domain_name:
            return True
        return False
    except:
        return True  # Assume available if lookup fails

# --- MAIN FUNCTION ---
def hunt_dead_sites(keyword):
    urls = google_search_urls(keyword)
    checked = []
    seen_domains = set()

    for url in urls:
        status = check_url_status(url)
        domain = get_root_domain(url)
        if domain in seen_domains:
            continue
        seen_domains.add(domain)

        domain_available = is_domain_available(domain) if status != "Alive" else False

        if status in ["404", "Unreachable"] or domain_available:
            checked.append({
                "url": url,
                "status": status,
                "domain": domain,
                "available": domain_available
            })

        time.sleep(1)

    return checked

# --- Run the Tool ---
if __name__ == "__main__":
    keyword = input("Enter your keyword (e.g., garage door repair): ")
    results = hunt_dead_sites(keyword)
    print("\nDead or Available Domains:\n")
    for item in results:
        print(f"{item['domain']} - {item['status']} - {'Available' if item['available'] else 'Taken'} - {item['url']}")
