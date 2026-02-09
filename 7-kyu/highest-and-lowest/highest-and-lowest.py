def high_and_low(numbers):
    num_list = list(map(int, numbers.split()))
    max_number = num_list[0]
    min_number = num_list[0]
    
    for num in num_list:
        if num > max_number:
            max_number = num
        if num < min_number:
            min_number = num
    
    return f"{max_number} {min_number}"
            
   