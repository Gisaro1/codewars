def square_digits(num):
    number_str = str(num)
    square_digit = ''.join(str(int(digit) ** 2)for digit in number_str)
    return int(square_digit)