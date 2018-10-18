# -*- coding: utf-8 -*- #

module Rouge
  module Lexers
    class Linescript < RegexLexer
      title     "LineScript"
      tag       'Linescript'
      mimetypes 'text/x-LineScript'
      filenames '*.osls'

      state:root do
          rule /(\/\/ ->)/, Comment, :main__1
          rule /(->)/, Keyword::Reserved
          rule /(?<=^)(.*?)(?=->)/, Keyword::Declaration
          rule /(?<=^)(.*?)(?=$)/, Keyword::Declaration
          rule /(?<=->)(.*?)(?=->)/, Name::Variable
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:main__1 do
          rule /(\n|\r|\r\n)/, String
          rule /./, Comment
      end

    end
  end
end
