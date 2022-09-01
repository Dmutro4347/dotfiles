import view
import model

menu = view.View()
answer = menu.main_menu()

if answer == '1':
  model.get_task_list()

elif answer == '2':
  answer = menu.new_task_menu()
  model.new_task(, task_description)