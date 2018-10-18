'fileTypes' : [
  'osls'
]
'name' : 'LineScript'
'patterns' : [
  {
    'include' : '#main'
  }
]
'scopeName' : 'source.LineScript'
'uuid' : ''
'repository' : {
  'main' : {
    'patterns' : [
      {
        'begin' : '(// ->)'
        'beginCaptures' : {
          '1' : {
            'name' : 'comment.LineScript'
          }
        }
        'contentName' : 'comment.LineScript'
        'end' : '($)'
        'endCaptures' : {
          '1' : {
            'name' : 'comment.LineScript'
          }
        }
      }
      {
        'match' : '(->)'
        'name' : 'keyword.operator.LineScript'
      }
      {
        'match' : '(?<=^)(.*?)(?=->)'
        'name' : 'variable.language.LineScript'
      }
      {
        'match' : '(?<=^)(.*?)(?=$)'
        'name' : 'variable.language.LineScript'
      }
      {
        'match' : '(?<=->)(.*?)(?=->)'
        'name' : 'support.variable.LineScript'
      }
    ]
  }
  'main__1' : {
    'patterns' : [
    ]
  }
}
