def jls_extract_def():
    task_list_read = open('/home/arfors/.config/code/python-code/problem/json/task-list.json', 'r')
    
    return task_list_read


task_list_read = jls_extract_def()
print(task_list_read.read())