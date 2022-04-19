const add = (first, second) => {
  return first + second;
};

// Singele element export
// export default add;

// Multipel element export
const multiply = (first, second) => {
  return first * second;
};

//  যেহেতু এটা ডিফল্ট হিসাবে পাঠানে হচ্ছে না  তাই ডিফল্ট হিসাবে ব্যাবহারও করা যাবেনা
export { add, multiply };
