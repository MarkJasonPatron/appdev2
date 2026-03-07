import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Todo = () => {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now().toString(),
      text: task,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  const toggleTodo = (id) => {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  const deleteTodo = (id) => {
    const updated = todos.filter(todo => todo.id !== id);
    setTodos(updated);
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>

      <TouchableOpacity onPress={() => toggleTodo(item.id)} style={styles.todoTextContainer}>
        <Text style={[styles.todoText, item.completed && styles.completed]}>
          {item.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => deleteTodo(item.id)}>
        <Ionicons name="trash-outline" size={22} color="red" />
      </TouchableOpacity>

    </View>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>My Todo List</Text>

      {/* Search */}
      <TextInput
        placeholder="Search tasks..."
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />

      {/* Add Todo */}
      <View style={styles.addContainer}>
        <TextInput
          placeholder="Enter a task..."
          style={styles.input}
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Todo List */}
      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f4ff"
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    paddingVertical: 30
  },

  search: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15
  },

  addContainer: {
    flexDirection: "row",
    marginBottom: 20
  },

  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10
  },

  addButton: {
    backgroundColor: "#4f46e5",
    marginLeft: 10,
    padding: 12,
    borderRadius: 10,
    justifyContent: "center"
  },

  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  todoTextContainer: {
    flex: 1
  },

  todoText: {
    fontSize: 16
  },

  completed: {
    textDecorationLine: "line-through",
    color: "gray"
  }

});

export default Todo;