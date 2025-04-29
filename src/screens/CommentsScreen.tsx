import React, { useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import Comment from "../components/Comment";
import { loadComments } from "../store/commentsSlice";

const CommentsScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { comments, loading, error } = useSelector(
    (state: RootState) => state.comments
  );

  useEffect(() => {
    dispatch(loadComments());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Comment comment={item} />}
        contentContainerStyle={styles.list}
        style={{ flex: 1 }}
        ListEmptyComponent={
          <View style={styles.centerContainer}>
            <Text>No comments found</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    paddingVertical: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    padding: 20,
  },
});

export default CommentsScreen;
