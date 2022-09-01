import view
import model
menu = view.View()

if menu.main_menu() == '1':
  model.get_task_list()