def binary_search(list, element):
  high = len(list) - 1
  low = 0
  while low <= high:
    mid = (low + high) / 2
    guess = list[element]
    if mid == guess:
      return mid
      break
    elif mid > guess:
      high = mid - 1
      continue
    elif mid < guess:
      low = mid + 1

a = [i for i in range(1, 101)]

print(binary_search(a, 50))