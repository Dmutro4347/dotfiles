# !/usr/bin/env python3

import subprocess as sp

PATH = 'file:///home/arfors/books/'

# Грокаєм алгоритми
sp.call(f"firefox '{PATH}Грокаем алгоритмы ( PDFDrive ).pdf'", shell=True)

#Вивчення linux
sp.call(f"firefox '{PATH}Внутреннее устройство Linux.pdf'", shell=True)

# Взлом
sp.call(f"firefox '{PATH}Kali Linux PRO.pdf'", shell=True)
# sp.call(f"firefox '{PATH}Хакинг_на_LINUX.pdf'")

# Metasploit
sp.call("firefox 'https://spy-soft.net/how-to-use-metasploit/'", shell=True)

# Веб
sp.call("firefox 'https://www.youtube.com/playlist?list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr'", shell=True)
