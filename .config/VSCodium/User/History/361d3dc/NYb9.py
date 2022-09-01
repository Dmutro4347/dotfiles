def binary_search(list, element):
  high = len(list) - 1
  low = 0
  while low <= high:
    mid = (low + high) / 2
    guess = list[element]
    if midel == guess:
      return mid
    elif midel > guess:
      high = mid - 1
    elif midel < guess:
      small = mid + 1

a = [i for i in range(1, 101)]

print(binary_search(a, 50))