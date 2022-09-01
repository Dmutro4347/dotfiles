def binary_search(list1, element):
  high = len(list1) - 1
  low = 0
  midel = (huigh + small) // 2

  print(midel)
  if midel == element:
    return midel
  elif midel > element:
    high = midel - 1
  elif midel < element:
    small = midel + 1

a = [i for i in range(1, 101)]

print(binary_search(a, 50))