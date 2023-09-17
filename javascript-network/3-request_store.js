import requests
import sys

url = sys.argv[1]
file_path = sys.argv[2]

response = requests.get(url)
response.raise_for_status()

with open(file_path, 'w', encoding='utf-8') as file    file.write(response.text)