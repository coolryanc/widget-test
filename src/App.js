import { XSwapWidget } from '@xyfinance/widget'
import './App.css';

const config = {
  disabledChains: [],
  fromInput: '0.1',
  fromToken: {
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    chainId: '1'
  },
  toToken: {
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    chainId: '56'
  },
  referrer: "0xFD19727868A8197F42e7a52d024374598F62953B",
  featuredTokens: [
    {
      address: '0x666666661f9B6D8c581602AAa2f76cbead06C401',
      chainId: '56'
    }
  ]
}

const theme = {
  mode: 'dark',
  fontFamily: 'proxima-nova',
  borderRadius: {
    container: '12px',
    inner: '8px',
  },
  colors: {
    primary: '#277EEC',
    gradient: ['#277EEC', '#1499E4']
  },
  components: {
    button: {
      variant: 'gradient'
    }
  }
}

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: '480px'
        }}
      >
        <XSwapWidget config={config} theme={theme} />
      </div>
    </div>
  );
}

export default App;
