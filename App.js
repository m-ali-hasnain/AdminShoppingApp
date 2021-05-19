import * as React from "react";
import { DataTable } from "react-native-paper";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/*Button 1*/}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Manage Products")}
      >
        <Text style={styles.text}>Manage Products</Text>
      </TouchableOpacity>
      {/*Button 2*/}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Manage Orders")}
      >
        <Text style={styles.text}>Manage Orders</Text>
      </TouchableOpacity>
      {/*Button 3*/}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Manage Employees")}
      >
        <Text style={styles.text}>Manage Employees</Text>
      </TouchableOpacity>
    </View>
  );
}
function manageProducts({ navigation }) {
  const products = [
    {
      key: "1",
      data: {
        productId: "1",
        productName: "Product 1",
        productPrice: 3600,
        productImg: "./assets/shop.png",
      },
    },
    {
      key: "2",
      data: {
        productId: "2",
        productName: "Product 2",
        productPrice: 4200,
        productImg: "./assets/shop.png",
      },
    },
    {
      key: "3",
      data: {
        productId: "3",
        productName: "Product 3",
        productPrice: 3900,
        productImg: "./assets/shop.png",
      },
    },
    {
      key: "4",
      data: {
        productId: "4",
        productName: "Product 4",
        productPrice: 1000,
        productImg: "./assets/shop.png",
      },
    },
    {
      key: "5",
      data: {
        productId: "5",
        productName: "Product 5",
        productPrice: 800,
        productImg: "./assets/shop.png",
      },
    },
    {
      key: "6",
      data: {
        productId: "6",
        productName: "Product 6",
        productPrice: 2500,
        productImg: "./assets/shop.png",
      },
    },
    {
      key: "7",
      data: {
        productId: "7",
        productName: "Product 7",
        productPrice: 3000,
        productImg: "./assets/shop.png",
      },
    },
    {
      key: "8",
      data: {
        productId: "8",
        productName: "Product 8",
        productPrice: 10600,
        productImg: "./assets/shop.png",
      },
    },
    {
      key: "9",
      data: {
        productId: "9",
        productName: "Product 9",
        productPrice: 1000,
        productImg: "./assets/shop.png",
      },
    },
    {
      key: "10",
      data: {
        productId: "10",
        productName: "Product 10",
        productPrice: 999,
        productImg: "./assets/shop.png",
      },
    },
  ];
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Product Id</DataTable.Title>
          <DataTable.Title>Product Name</DataTable.Title>
          <DataTable.Title>Product Price</DataTable.Title>
          <DataTable.Title>Product Image</DataTable.Title>
        </DataTable.Header>
        {products.map((product) => {
          return (
            <DataTable.Row
              key={product.key} // you need a unique key per item
              onPress={() => {
                navigation.navigate("Product Details", {
                  id: product.data.productId,
                  name: product.data.productName,
                  price: product.data.productPrice,
                });
              }}
            >
              <DataTable.Cell>{product.key}</DataTable.Cell>
              <DataTable.Cell style={styles.messageColumn}>
                {product.data.productName}
              </DataTable.Cell>
              <DataTable.Cell>{product.data.productPrice}</DataTable.Cell>
              <DataTable.Cell>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("./assets/shop.png")}
                />
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </View>
  );
}
function manageEmployees({ navigation }) {
  const employees = [
    {
      key: "1",
      data: {
        employeeId: "1",
        employeeName: "Sparrow",
        employeeSalary: 360000,
        employeeImg: "./assets/employee.png",
      },
    },
    {
      key: "2",
      data: {
        employeeId: "2",
        employeeName: "Joe",
        employeeSalary: 32600,
        employeeImg: "./assets/employee.png",
      },
    },
    {
      key: "3",
      data: {
        employeeId: "3",
        employeeName: "Marky",
        employeeSalary: 326090,
        employeeImg: "./assets/employee.png",
      },
    },
    {
      key: "4",
      data: {
        employeeId: "4",
        employeeName: "Raheem",
        employeeSalary: 10000,
        employeeImg: "./assets/employee.png",
      },
    },
    {
      key: "5",
      data: {
        employeeId: "5",
        employeeName: "Kareem",
        employeeSalary: 18999,
        employeeImg: "./assets/employee.png",
      },
    },
    {
      key: "6",
      data: {
        employeeId: "6",
        employeeName: "M.Salah",
        employeeSalary: 999991,
        employeeImg: "./assets/employee.png",
      },
    },
    {
      key: "7",
      data: {
        employeeId: "7",
        employeeName: "M.Nafay",
        employeeSalary: 326000,
        employeeImg: "./assets/employee.png",
      },
    },
    {
      key: "8",
      data: {
        employeeId: "8",
        employeeName: "Elizabeth Olsen",
        employeeSalary: 10000000,
        employeeImg: "./assets/employee.png",
      },
    },
    {
      key: "9",
      data: {
        employeeId: "9",
        employeeName: "Tony Stark",
        employeeSalary: 10000000,
        employeeImg: "./assets/employee.png",
      },
    },
    {
      key: "10",
      data: {
        employeeId: "10",
        employeeName: "Thor",
        employeeSalary: 3260090,
        employeeImg: "./assets/employee.png",
      },
    },
  ];
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Id</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Salary</DataTable.Title>
          <DataTable.Title>Profile</DataTable.Title>
        </DataTable.Header>
        {employees.map((employee) => {
          return (
            <DataTable.Row
              key={employee.key} // you need a unique key per item
              onPress={() => {
                navigation.navigate("Employee Details", {
                  id: employee.data.employeeId,
                  name: employee.data.employeeName,
                  Salary: employee.data.employeeSalary,
                });
              }}
            >
              <DataTable.Cell>{employee.key}</DataTable.Cell>
              <DataTable.Cell style={styles.messageColumn}>
                {employee.data.employeeName}
              </DataTable.Cell>
              <DataTable.Cell>{employee.data.employeeSalary}</DataTable.Cell>
              <DataTable.Cell>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("./assets/employee.png")}
                />
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </View>
  );
}
function manageOrders({ navigation }) {
  const orders = [
    {
      key: "1",
      data: {
        orderId: "1",
        productName: "Product X",
        orderImg: "./assets/carts.png",
        totalAmount: 5000,
      },
    },
    {
      key: "2",
      data: {
        orderId: "2",
        productName: "Product X",
        orderImg: "./assets/carts.png",
        totalAmount: 5000,
      },
    },
    {
      key: "3",
      data: {
        orderId: "3",
        productName: "Product X",
        orderImg: "./assets/carts.png",
        totalAmount: 5000,
      },
    },
    {
      key: "4",
      data: {
        orderId: "4",
        productName: "Product X",
        orderImg: "./assets/carts.png",
        totalAmount: 5000,
      },
    },
    {
      key: "5",
      data: {
        orderId: "5",
        productName: "Product X",
        orderImg: "./assets/carts.png",
        totalAmount: 5000,
      },
    },
    {
      key: "6",
      data: {
        orderId: "6",
        productName: "Product X",
        orderImg: "./assets/carts.png",
        totalAmount: 5000,
      },
    },
    {
      key: "7",
      data: {
        orderId: "7",
        productName: "Product X",
        orderImg: "./assets/carts.png",
        totalAmount: 5000,
      },
    },
    {
      key: "8",
      data: {
        orderId: "8",
        productName: "Product X",
        orderImg: "./assets/carts.png",
        totalAmount: 5000,
      },
    },
    {
      key: "9",
      data: {
        orderId: "9",
        productName: "Product X",
        orderImg: "./assets/carts.png",
        totalAmount: 300,
      },
    },
    {
      key: "10",
      data: {
        orderId: "10",
        productName: "Product X",
        orderImg: "./assets/carts.png",
        totalAmount: 490,
      },
    },
  ];
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Order Id</DataTable.Title>
          <DataTable.Title>Product Name</DataTable.Title>
          <DataTable.Title>Total Amount</DataTable.Title>
          <DataTable.Title>Product Image</DataTable.Title>
        </DataTable.Header>
        {orders.map((order) => {
          return (
            <DataTable.Row
              key={order.key} // you need a unique key per item
              onPress={() => {
                navigation.navigate("Order Details", {
                  id: order.data.orderId,
                  name: order.data.productName,
                  totalAmount: order.data.totalAmount,
                });
              }}
            >
              <DataTable.Cell>{order.key}</DataTable.Cell>
              <DataTable.Cell style={styles.messageColumn}>
                {order.data.productName}
              </DataTable.Cell>
              <DataTable.Cell>{order.data.totalAmount}</DataTable.Cell>
              <DataTable.Cell>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("./assets/carts.png")}
                />
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </View>
  );
}
function productDetails({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.heading}>Product Details</Text>
      <Image
        style={{ width: 150, height: 150 }}
        source={require("./assets/shop.png")}
      />
      <Text style={styles.information}>Product Id: {route.params.id}</Text>
      <Text style={styles.information}>Product Name: {route.params.name}</Text>
      <Text style={styles.information}>Product Price: {route.params.price}</Text>
    </View>
  );
}
function orderDetails({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.heading}>Order Details</Text>
      <Image
        style={{ width: 150, height: 150 }}
        source={require("./assets/carts.png")}
      />
      <Text style={styles.information}>Order Id: {route.params.id}</Text>
      <Text style={styles.information}>Product Name: {route.params.name}</Text>
      <Text style={styles.information}>Total Amount: {route.params.totalAmount}</Text>
    </View>
  );
}
function employeeDetails({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.heading}>Employee Details</Text>
      <Image
        style={{ width: 150, height: 150 }}
        source={require("./assets/employee.png")}
      />
      <Text style={styles.information}>Employee Id: {route.params.id}</Text>
      <Text style={styles.information}>Employee Name: {route.params.name}</Text>
      <Text style={styles.information}>Employee Salary: {route.params.Salary}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Manage Products" component={manageProducts} />
        <Stack.Screen name="Manage Employees" component={manageEmployees} />
        <Stack.Screen name="Manage Orders" component={manageOrders} />
        <Stack.Screen name="Product Details" component={productDetails} />
        <Stack.Screen name="Employee Details" component={employeeDetails} />
        <Stack.Screen name="Order Details" component={orderDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    padding: 5,
  },
  button: {
    width: 100,
    backgroundColor: "tomato",
    padding: 5,
    textAlign: "center",
    elevation: 1,
    borderRadius: 1,
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    margin:10,
  },
  information:{
    fontSize: 18,
    padding: 5,
    margin:5,
  }
});
