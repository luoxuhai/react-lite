import './style.css';
import * as ReactLite from './ReactLite';

function App() {
  return (
    <div>
      <div>xcxcxc</div>
      <p>cedefefr</p>
      <div style="color: red">
        <CounterPure />
      </div>
      <Counter />
      <Input />
    </div>
  );
}

function CounterPure() {
  return (
    <div>
      <h1>Count</h1>
    </div>
  );
}

function Counter() {
  const [state, setState] = ReactLite.useState(1);

  return (
    <div>
      <h1>Count: {state}</h1>
      <button onClick={() => setState((c) => c + 1)}>累加</button>
    </div>
  );
}

function Input() {
  const [state, setState] = ReactLite.useState('demo');

  return (
    <div>
      <h1>Text: {state}</h1>
      <input
        value={state}
        onInput={(value) => {
          setState(value.target.value);
        }}
      />
    </div>
  );
}

ReactLite.render(<App />, document.getElementById('app'));
