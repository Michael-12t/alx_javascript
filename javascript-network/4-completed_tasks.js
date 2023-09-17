import requests
import sys

url = sys.argv[1]

response = requests.get(url)
response.raise_for_status()

todos = response.json()

completed_tasks = {}

for todo in todos    if todo['completed']        user_id = str(todo['userId'])
        if user_id in completed_tasks            new Promise((resolve, reject) => {
            completed_tasks
        })[user_id] += 1
        else            completed_tasks[user_id] = 1

print(completed_tasks)