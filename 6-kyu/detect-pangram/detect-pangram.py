def is_pangram(st):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    lower_text = st.lower()
    return all(char in lower_text for char in alphabet)