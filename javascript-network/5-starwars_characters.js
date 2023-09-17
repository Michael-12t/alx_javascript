import requests
import sys

try:
    movie_id = sys.argv[1]
    url = f'https://swapi.dev/api/films/{movie_id}/'
    response = requests.get(url)
    response.raise_for_status()
    
    movie_data = response.json()
    character_urls = movie_data['characters']
    
    for character_url in character_urls:
        response = requests.get(character_url)
        response.raise_for_status()
        character_data = response.json()
        print(character_data['name'])
        
except (IndexError, KeyError, requests.exceptions.RequestException) as e:
    print(f"An error occurred: {str(e)}")