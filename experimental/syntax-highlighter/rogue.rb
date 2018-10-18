# -*- coding: utf-8 -*- #

module Rouge
  module Lexers
    class Linescript < RegexLexer
      title     "LineScript"
      tag       'Linescript'
      mimetypes 'text/x-LineScript'
      filenames '*.osls'

      state:root do
          rule /(\/\/ ->)/, String, :main__1
          rule /(->)/, String
          rule /(?<=^)(.*?)(?=->)/, String
          rule /(?<=^)(.*?)(?=$)/, String
          rule /(?<=->)(.*?)(?=->)/, String
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:main__1 do
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

    end
  end
end
