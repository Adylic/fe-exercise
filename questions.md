## JavaScript

### Data
```javascript
const books = [
  {
    id: 1,
    title: 'Robinson Crusoe',
    author: 'Daniel Defoe'
  },
  {
    id: 2,
    title: 'Lord of the Flies',
    author: 'William Golding'
  },
  {
    id: 3,
    title: 'Catch-22',
    author: 'Joseph Heller'
  }
]
```
```javascript
const authors = [
  {
    name: 'Daniel Defoe',
    bio: 'Daniel Defoe, born Daniel Foe, was an English trader, writer, journalist, pamphleteer and spy. He is most famous for his novel Robinson Crusoe, which is second only to the Bible in its number of translations.',
    born: 1660,
    died: 1731,
    books: [1]
  },
  {
    name: 'William Golding',
    bio: 'Sir William Gerald Golding, CBE was a British novelist, playwright, and poet. Best known for his debut novel Lord of the Flies, he would go on to write over a dozen novels in his lifetime.',
    born: 1911,
    died: 1993,
    books: [2]
  },
  {
    name: 'Joseph Heller',
    bio: 'Joseph Heller was an American author of novels, short stories, plays, and screenplays. His best-known work is the novel Catch-22, a satire on war and bureaucracy, whose title has become a synonym for an absurd or contradictory choice.',
    born: 1923,
    died: 1999,
    books: [3]
  }
]
```

### Map 
1. Write a function that will take `books` array and return an array of book titles:
```
['Robinson Crusoe', 'Lord of the Flies', 'Catch-22']
```

### Reduce 
1. Write a reducer function `getAuthors`, that will take `books` and `authors` as arguments and return an array of author objects. 
Include only authors born after 1900. Author should have a property `books` that is an array of objects, each containing information about the book. For example:
```javascript
[
  {
    name: 'William Golding',
    bio: 'Sir William Gerald Golding, CBE was a British novelist, playwright, and poet. Best known for his debut novel Lord of the Flies, he would go on to write over a dozen novels in his lifetime.',
    born: 1911,
    died: 1993,
    books: [
      {
        id: 2,
        title: 'Lord of the Flies',
        author: 'William Golding'
      }
    ]
  },
  // next author
]
```

### Recursion: 
Given an array [1,2,3,4,5,6], write a function that prints in the console:
```
<1>
  <2>
    <3>
      <4>
        <5>
          <6>
          </6>
        </5>
      </4>
    </3>
  </2>
</1>
```

## React
Please use best React practices to refactor the code:
[Bad React Example](https://codesandbox.io/s/charming-tharp-opobt)


