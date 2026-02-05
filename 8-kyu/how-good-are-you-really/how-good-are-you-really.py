def better_than_average(class_points, your_points):
    total = sum(class_points)
    average = total / len(class_points)
    if (your_points > average):
        return True
    else:
        return False