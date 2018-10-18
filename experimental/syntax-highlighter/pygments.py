from pygments.lexer import RegexLexer, bygroups
from pygments.token import *

import re

__all__=['LinescriptLexer']

class LinescriptLexer(RegexLexer):
    name = 'Linescript'
    aliases = ['LineScript']
    filenames = ['*.osls']
    flags = re.MULTILINE | re.UNICODE

    tokens = {
        'root' : [
            (u'(// ->)', bygroups(String), 'main__1'),
            (u'(->)', bygroups(String)),
            (u'(?<=^)(.*?)(?=->)', bygroups(String)),
            (u'(?<=^)(.*?)(?=$)', bygroups(String)),
            (u'(?<=->)(.*?)(?=->)', bygroups(String)),
            ('(\n|\r|\r\n)', String),
            ('.', String),
        ], 
        'main__1' : [
            ('(\n|\r|\r\n)', String),
            ('.', String),
        ]
    }
