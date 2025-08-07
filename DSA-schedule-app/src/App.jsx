import './App.css';

function App() {
  return (
    <div style={{ padding: '1rem', maxWidth: 900, margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>📆 DSA Session Schedule </h1>
      <p>
        <em>
          Check the box for any session you plan to <strong>lead</strong> or attend.<br />
        </em>
      </p>
      <p>
        This is the full schedule for the 8-week Data Structures and Algorithms course. The tables below show the most common time zones and relevant information, such as chapters and the textbook&nbsp;
        <a href="https://www.amazon.com/dp/195570600X?ref=ppx_yo2ov_dt_b_fed_asin_title" target="_blank" rel="noopener noreferrer">
          (Data Structures & Algorithms textbook)
        </a>.
        There are also video walkthroughs of related problems for each topic.
      </p>
      <hr />

      {/* Week 1 */}
      <section>
        <h2>🗓️ Week 1 (Jul 24 – Jul 30) — Recursion</h2>
        <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>✅</th>
              <th>Session</th>
              <th>Day</th>
              <th>Time (ET)</th>
              <th>Time (PT)</th>
              <th>Time (CT)</th>
              <th>Time (GMT)</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            {/* Removed A1 Wednesday row */}
            <tr>
              <td><input type="checkbox" /></td>
              <td>B1</td>
              <td>Thursday</td>
              <td>2:00 PM</td>
              <td>11:00 AM</td>
              <td>1:00 PM</td>
              <td>7:00 PM</td> {/* 6:00 PM + 1 hour */}
              <td>Recursion</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>B2</td>
              <td>Saturday</td>
              <td>5:00 AM</td>
              <td>2:00 AM</td>
              <td>4:00 AM</td>
              <td>10:00 AM</td> {/* 9:00 AM + 1 hour */}
              <td>Recursion</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>A2</td>
              <td>Sunday</td>
              <td>11:00 AM</td>
              <td>8:00 AM</td>
              <td>10:00 AM</td>
              <td>4:00 PM</td> {/* 3:00 PM + 1 hour */}
              <td>Recursion</td>
            </tr>
          </tbody>
        </table>
        <p><em>Chapter 33 page 392 (Recursion)</em></p>
        <details>
          <summary><strong>Resources</strong></summary>
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=hvQGf7HIK5Y&t=3s&ab_channel=Soupzzz" target="_blank" rel="noopener noreferrer">
                LeetCode 78: Subsets | Backtracking | Python
              </a>
            </li>
          </ul>
        </details>
        <hr />
      </section>

      {/* Week 2 */}
      <section>
        <h2>🗓️ Week 2 (Jul 31 – Aug 06) — Stacks & Queues</h2>
        <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>✅</th>
              <th>Session</th>
              <th>Day</th>
              <th>Time (ET)</th>
              <th>Time (PT)</th>
              <th>Time (CT)</th>
              <th>Time (GMT)</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>A1</td>
              <td>Wednesday</td>
              <td>9:00 PM</td>
              <td>6:00 PM</td>
              <td>8:00 PM</td>
              <td>2:00 AM</td> {/* 1:00 AM + 1 hour */}
              <td>Stacks & Queues</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>B1</td>
              <td>Thursday</td>
              <td>2:00 PM</td>
              <td>11:00 AM</td>
              <td>1:00 PM</td>
              <td>7:00 PM</td> {/* 6:00 PM + 1 hour */}
              <td>Stacks & Queues</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>B2</td>
              <td>Saturday</td>
              <td>5:00 AM</td>
              <td>2:00 AM</td>
              <td>4:00 AM</td>
              <td>10:00 AM</td> {/* 9:00 AM + 1 hour */}
              <td>Stacks & Queues</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>A2</td>
              <td>Sunday</td>
              <td>11:00 AM</td>
              <td>8:00 AM</td>
              <td>10:00 AM</td>
              <td>4:00 PM</td> {/* 3:00 PM + 1 hour */}
              <td>Stacks & Queues</td>
            </tr>
          </tbody>
        </table>
        <p><em>Chaper 32 page 378 (Stacks & Queues)</em></p>
        <details>
          <summary><strong>Resources</strong></summary>
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=FYsebUneIIk&ab_channel=Soupzzz" target="_blank" rel="noopener noreferrer">
                Valid Parentheses - Leet Code 20 - Stack - JavaScript
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=LdEDOQLcPI4&t=8s&ab_channel=Soupzzz" target="_blank" rel="noopener noreferrer">
                Clear Digits - Leetcode 3174 - Stack ft. JavaScript
              </a>
            </li>
          </ul>
        </details>
        <hr />
      </section>

      {/* Week 3 */}
      <section>
        <h2>🗓️ Week 3 (Aug 07 – Aug 13) — Binary Trees & BSTs</h2>
        <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>✅</th>
              <th>Session</th>
              <th>Day</th>
              <th>Time (ET)</th>
              <th>Time (PT)</th>
              <th>Time (CT)</th>
              <th>Time (GMT)</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>A1</td>
              <td>Wednesday</td>
              <td>9:00 PM</td>
              <td>6:00 PM</td>
              <td>8:00 PM</td>
              <td>2:00 AM</td> {/* 1:00 AM + 1 hour */}
              <td>Binary Trees & BSTs</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>B1</td>
              <td>Thursday</td>
              <td>2:00 PM</td>
              <td>11:00 AM</td>
              <td>1:00 PM</td>
              <td>7:00 PM</td> {/* 6:00 PM + 1 hour */}
              <td>Binary Trees & BSTs</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>B2</td>
              <td>Saturday</td>
              <td>5:00 AM</td>
              <td>2:00 AM</td>
              <td>4:00 AM</td>
              <td>10:00 AM</td> {/* 9:00 AM + 1 hour */}
              <td>Binary Trees & BSTs</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>A2</td>
              <td>Sunday</td>
              <td>11:00 AM</td>
              <td>8:00 AM</td>
              <td>10:00 AM</td>
              <td>4:00 PM</td> {/* 3:00 PM + 1 hour */}
              <td>Binary Trees & BSTs</td>
            </tr>
          </tbody>
        </table>
        <p><em>Chapter 35 page 429 (trees)</em></p>
        <details>
          <summary><strong>Resources</strong></summary>
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=mfWGEzceVlw&t=110s&ab_channel=Soupzzz" target="_blank" rel="noopener noreferrer">
                LeetCode 110: Balanced Binary Tree | TREE | JavaScript
              </a>
            </li>
          </ul>
        </details>
        <hr />
      </section>

      {/* Week 4 */}
      <section>
        <h2>🗓️ Week 4 (Aug 14 – Aug 20) — Graphs</h2>
        <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>✅</th>
              <th>Session</th>
              <th>Day</th>
              <th>Time (ET)</th>
              <th>Time (PT)</th>
              <th>Time (CT)</th>
              <th>Time (GMT)</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>A1</td>
              <td>Wednesday</td>
              <td>9:00 PM</td>
              <td>6:00 PM</td>
              <td>8:00 PM</td>
              <td>2:00 AM</td> {/* 1:00 AM + 1 hour */}
              <td>Graphs</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>B1</td>
              <td>Thursday</td>
              <td>2:00 PM</td>
              <td>11:00 AM</td>
              <td>1:00 PM</td>
              <td>7:00 PM</td> {/* 6:00 PM + 1 hour */}
              <td>Graphs</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>B2</td>
              <td>Saturday</td>
              <td>5:00 AM</td>
              <td>2:00 AM</td>
              <td>4:00 AM</td>
              <td>10:00 AM</td> {/* 9:00 AM + 1 hour */}
              <td>Graphs</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>A2</td>
              <td>Sunday</td>
              <td>11:00 AM</td>
              <td>8:00 AM</td>
              <td>10:00 AM</td>
              <td>4:00 PM</td> {/* 3:00 PM + 1 hour */}
              <td>Graphs</td>
            </tr>
          </tbody>
        </table>
        <p>
          <em>
            chapter 36 page 456 (graphs)<br />
            chapter 28 page 312 (grids and matrices)
          </em>
        </p>
        <details>
          <summary><strong>Resources</strong></summary>
          <ul>
            
          </ul>
        </details>
        <hr />
      </section>

      {/* Week 5 */}
      <section>
        <h2>🗓️ Week 5 (Aug 21 – Aug 27) — Backtracking</h2>
        <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>✅</th>
              <th>Session</th>
              <th>Day</th>
              <th>Time (ET)</th>
              <th>Time (PT)</th>
              <th>Time (CT)</th>
              <th>Time (GMT)</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>A1</td>
              <td>Wednesday</td>
              <td>9:00 PM</td>
              <td>6:00 PM</td>
              <td>8:00 PM</td>
              <td>2:00 AM</td> {/* 1:00 AM + 1 hour */}
              <td>Backtracking</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>B1</td>
              <td>Thursday</td>
              <td>2:00 PM</td>
              <td>11:00 AM</td>
              <td>1:00 PM</td>
              <td>7:00 PM</td> {/* 6:00 PM + 1 hour */}
              <td>Backtracking</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>B2</td>
              <td>Saturday</td>
              <td>5:00 AM</td>
              <td>2:00 AM</td>
              <td>4:00 AM</td>
              <td>10:00 AM</td> {/* 9:00 AM + 1 hour */}
              <td>Backtracking</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>A2</td>
              <td>Sunday</td>
              <td>11:00 AM</td>
              <td>8:00 AM</td>
              <td>10:00 AM</td>
              <td>4:00 PM</td> {/* 3:00 PM + 1 hour */}
              <td>Backtracking</td>
            </tr>
          </tbody>
        </table>
        <p><em>Backtracking Chapter 39 page 537</em></p>
        <details>
          <summary><strong>Resources</strong></summary>
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=hvQGf7HIK5Y&t=3s&ab_channel=Soupzzz" target="_blank" rel="noopener noreferrer">
                LeetCode 78: Subsets | Backtracking | Python
              </a>
            </li>
          </ul>
        </details>
        <hr />
      </section>

      {/* Week 6 */}
      <section>
        <h2>🗓️ Week 6 (Aug 28 – Sep 03) — Linked Lists</h2>
        <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>✅</th>
              <th>Session</th>
              <th>Day</th>
              <th>Time (ET)</th>
              <th>Time (PT)</th>
              <th>Time (CT)</th>
              <th>Time (GMT)</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>A1</td>
              <td>Wednesday</td>
              <td>9:00 PM</td>
              <td>6:00 PM</td>
              <td>8:00 PM</td>
              <td>2:00 AM</td> {/* 1:00 AM + 1 hour */}
              <td>Linked Lists</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>B1</td>
              <td>Thursday</td>
              <td>2:00 PM</td>
              <td>11:00 AM</td>
              <td>1:00 PM</td>
              <td>7:00 PM</td> {/* 6:00 PM + 1 hour */}
              <td>Linked Lists</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>B2</td>
              <td>Saturday</td>
              <td>5:00 AM</td>
              <td>2:00 AM</td>
              <td>4:00 AM</td>
              <td>10:00 AM</td> {/* 9:00 AM + 1 hour */}
              <td>Linked Lists</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>A2</td>
              <td>Sunday</td>
              <td>11:00 AM</td>
              <td>8:00 AM</td>
              <td>10:00 AM</td>
              <td>4:00 PM</td> {/* 3:00 PM + 1 hour */}
              <td>Linked Lists</td>
            </tr>
          </tbody>
        </table>
        <p><em>Chapter 34 page 412 (linked list)</em></p>
        <details>
          <summary><strong>Resources</strong></summary>
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=OKlKl93MduU&ab_channel=Soupzzz" target="_blank" rel="noopener noreferrer">
                LeetCode 23: Merge k Sorted Lists | Linked List | JavaScript
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=lExB9nC9BPQ&t=5s&ab_channel=Soupzzz" target="_blank" rel="noopener noreferrer">
                Linked List Cycle - Leet Code 141 - 2 solutions - (Set and 2 pointers) - JavaScript
              </a>
            </li>
          </ul>
        </details>
        <hr />
      </section>

      {/* Week 7 */}
      <section>
        <h2>🗓️ Week 7 (Sep 04 – Sep 10) — Hash Tables</h2>
        <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>✅</th>
              <th>Session</th>
              <th>Day</th>
              <th>Time (ET)</th>
              <th>Time (PT)</th>
              <th>Time (CT)</th>
              <th>Time (GMT)</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>A1</td>
              <td>Wednesday</td>
              <td>9:00 PM</td>
              <td>6:00 PM</td>
              <td>8:00 PM</td>
              <td>2:00 AM</td> {/* 1:00 AM + 1 hour */}
              <td>Hash Tables</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>B1</td>
              <td>Thursday</td>
              <td>2:00 PM</td>
              <td>11:00 AM</td>
              <td>1:00 PM</td>
              <td>7:00 PM</td> {/* 6:00 PM + 1 hour */}
              <td>Hash Tables</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>B2</td>
              <td>Saturday</td>
              <td>5:00 AM</td>
              <td>2:00 AM</td>
              <td>4:00 AM</td>
              <td>10:00 AM</td> {/* 9:00 AM + 1 hour */}
              <td>Hash Tables</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>A2</td>
              <td>Sunday</td>
              <td>11:00 AM</td>
              <td>8:00 AM</td>
              <td>10:00 AM</td>
              <td>4:00 PM</td> {/* 3:00 PM + 1 hour */}
              <td>Hash Tables</td>
            </tr>
          </tbody>
        </table>
        <p><em>Chapter 30 page 345 (set and maps)</em></p>
        <details>
          <summary><strong>Resources</strong></summary>
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=Qg4ABPymZm8&t=12s&ab_channel=Soupzzz" target="_blank" rel="noopener noreferrer">
                Fair Candy Swap - Leet Code 888 - Set - JavaScript
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=lExB9nC9BPQ&t=5s&ab_channel=Soupzzz" target="_blank" rel="noopener noreferrer">
                Linked List Cycle - Leet Code 141 - 2 solutions - (Set and 2 pointers) - JavaScript
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=kZt9xHv2WUE&ab_channel=Soupzzz" target="_blank" rel="noopener noreferrer">
                Find the Town Judge - Leet Code 997 - Hashmap - JavaScript
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=xyjIlbeFheo&ab_channel=Soupzzz" target="_blank" rel="noopener noreferrer">
                1528. Shuffle String | Array & ZIP | Python
              </a>
            </li>
          </ul>
        </details>
        <hr />
      </section>

      {/* Week 8 */}
      <section>
        <h2>🗓️ Week 8 (Sep 11 – Sep 17) — Sorting & Binary Search</h2>
        <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>✅</th>
              <th>Session</th>
              <th>Day</th>
              <th>Time (ET)</th>
              <th>Time (PT)</th>
              <th>Time (CT)</th>
              <th>Time (GMT)</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>A1</td>
              <td>Wednesday</td>
              <td>9:00 PM</td>
              <td>6:00 PM</td>
              <td>8:00 PM</td>
              <td>2:00 AM</td> {/* 1:00 AM + 1 hour */}
              <td>Sorting & Binary Search</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>B1</td>
              <td>Thursday</td>
              <td>2:00 PM</td>
              <td>11:00 AM</td>
              <td>1:00 PM</td>
              <td>7:00 PM</td> {/* 6:00 PM + 1 hour */}
              <td>Sorting & Binary Search</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>B2</td>
              <td>Saturday</td>
              <td>5:00 AM</td>
              <td>2:00 AM</td>
              <td>4:00 AM</td>
              <td>10:00 AM</td> {/* 9:00 AM + 1 hour */}
              <td>Sorting & Binary Search</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>A2</td>
              <td>Sunday</td>
              <td>11:00 AM</td>
              <td>8:00 AM</td>
              <td>10:00 AM</td>
              <td>4:00 PM</td> {/* 3:00 PM + 1 hour */}
              <td>Sorting & Binary Search</td>
            </tr>
          </tbody>
        </table>
        <p>
          <em>
            Chapter 42 page 598 (Topological sort) <br />
            Chapter 29 page 326 (Binary search)
          </em>
        </p>
        <details>
          <summary><strong>Resources</strong></summary>
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=XQsTqAnGAI8&t=42s&ab_channel=Soupzzz" target="_blank" rel="noopener noreferrer">
                Binary Search - Leetcode 704 - JavaScript
              </a>
            </li>
          </ul>
        </details>
        <hr />
      </section>

    </div>
  );
}

export default App;
