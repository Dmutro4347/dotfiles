def binary_search(list, element):
  high = len(list) - 1
  low = 0
  while low <= high:
    midel = (low + high) / 2
    if midel == element:
      return midel
    elif midel > element:
      high = midel - 1
    elif midel < element:
      small = midel + 1

a = [i for i in range(1, 101)]

print(binary_search(a, 50))