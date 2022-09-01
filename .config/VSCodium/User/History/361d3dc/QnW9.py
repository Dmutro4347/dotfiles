def binary_search(list, element):
  huigh = len(list)
  small = 0
  midel = huigh + small // 2

  if midle == element:
    return midel
  elif midel > element:
    high = midle - 1
  elif midel < element:
    small = midle + 1

a = [i for i in range(1, 101)]

print(binary_search(a, 50))