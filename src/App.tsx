import './App.css';
import { ProductsTable } from './components/ProductsTable/ProductsTable';
import { View } from './components/View/View';
import 'antd/dist/antd.css';
import  React from "react";

function App() {
  return (
    <div className="App">
      <View>
        <ProductsTable />
      </View>
    </div>
  );
}

export default App;
