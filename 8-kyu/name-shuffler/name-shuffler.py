def name_shuffler(fullname : str) -> str:
    parts = fullname.split()
    if len(parts) == 2:
        firstname, lastname = parts
        return (f"{lastname} {firstname}")
    else:
        return " ".join(part[::-1])
   