from collections import Counter
def duplicate_count(text):
    text = text.lower()
    counts = Counter(text)
    
    return sum(1 for c in counts.values() if c > 1 )
​