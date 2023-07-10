Python 3.9.13 (tags/v3.9.13:6de2ca5, May 17 2022, 16:36:42) [MSC v.1929 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> import re
>>> example = 'Beautiful is better than ugly.'
>>> re.findall('\\bb.+?\\b', example)
['better']
>>> re.findall(r'\bb.+?\b', example)
['better']
>>> re.findall(r'\bb.+\b', example)
['better than ugly']
>>> re.findall(r'\bbe+?\b', example)
[]
>>> re.findall(r'\\bbe+?\\b', example)
[]
>>> re.findall(r'\\bbe+\\b', example)
[]
>>> re.findall(r'\\bbe\\b', example)
[]
>>> re.findall(r'be', example)
['be']
>>> re.findall(r'be', example)
['be']
>>> re.findall(r'\bbe', example)
['be']
>>> re.findall(r'\bbe\b', example)
[]
>>> re.findall(r'\bb.\b', example)
[]
>>> re.findall(r'\bb.+\b', example)
['better than ugly']
>>> re.findall(r'\bb.+?\b', example)
['better']
>>> re.findall(r'\bb.+?\b', example)
['better']
>>> Lexample='Beautiful is bbbbig than eeegggg.'
>>> re.findall(r'\bb.+\b', example)
['better than ugly']
>>> re.findall(r'\bb.+\b', Lexample)
['bbbbig than eeegggg']
>>> re.findall(r'\bb.+', Lexample)
['bbbbig than eeegggg.']
>>> re.findall(r'b.+', Lexample)
['bbbbig than eeegggg.']
>>> re.findall(r'b.+\b', Lexample)
['bbbbig than eeegggg']
>>> re.findall(r'\bb.+\b', Lexample)
['bbbbig than eeegggg']
>>> re.findall(r'\bb.+?\b', Lexample)
['bbbbig']
>>> re.findall(r'b.+', Lexample)
['bbbbig than eeegggg.']
>>> re.findall(r'b.+?', Lexample)
['bb', 'bb']
>>> re.findall(r'\bb.+?\b', Lexample)
['bbbbig']
>>> 