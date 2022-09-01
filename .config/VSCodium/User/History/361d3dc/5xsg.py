def binary_search(list, element):
  huigh = len(list)
  small = 0
  midle = huigh + small // 2

  if midle == element:
    return midle
  elif midel > element:
    high = midle - 1
  elif midle < element:
    small = midle + 1

a = [i for i in range(1, 101)]

print(binary_search(a, 50))