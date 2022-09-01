def binary_search(list, element):
  huigh = len(list)
  small = 0
  midle = huigh + small // 2

  if midle == element:task_description
  json.dump(task_list, task_list_write)
  task_list_write.close()

def del_task(task_id):
  for i in task_list:
    if i[0] == task_id:
      del task_list[f'{i}']
      break
    
def execute_task(task_id):
  for i in task_list:
    if i[0] == task_id:
      sp.call(task_list.get(i), shell=True)

task_list_read.close()

    return midle
  elif midel > element:
