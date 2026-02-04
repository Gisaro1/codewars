def goose_filter(birds):
    geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    result = []
    for bird in birds: 
        if bird not in geese:
            result.append(bird)
    return result
​
​
   