def duplicate_count(text):
    text = text.lower()
    char_count = {}
    
    for char in text :
        char_count[char] = char_count.get(char,0) + 1
    
    return sum( 1 for count in char_count.values() if count > 1)
   
​