import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Rating } from "react-native-ratings";
import { useDispatch } from "react-redux";
import { updateRating } from "../store/commentsSlice";
import { Comment as CommentType } from "../types/comment";

interface CommentProps {
  comment: CommentType;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const dispatch = useDispatch();

  const handleRating = (rating: number) => {
    dispatch(updateRating({ id: comment.id, rating }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{comment.title}</Text>
      <Text style={styles.body}>{comment.body}</Text>
      <Rating
        type="star"
        ratingCount={5}
        imageSize={30}
        startingValue={comment.rating}
        onFinishRating={handleRating}
        style={styles.rating}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    marginBottom: 12,
  },
  rating: {
    paddingVertical: 10,
  },
});

export default Comment;
