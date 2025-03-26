#include <stdbool.h>
#include <stdio.h>
#include <string.h>

enum Tag { OK, ERROR };

union Result {
  int value;
  char reason[10];
};

struct TaggedUnion {
  enum Tag tag;
  union Result result;
};

int main() {
  union Result res;
  // res.value = 12;
  // res.reason = "a bug";
  strcpy(res.reason, "a bug");
  // struct TaggedUnion r = {OK, res};
  struct TaggedUnion r = {ERROR, res};

  switch (r.tag) {
    case OK:
      printf("%d", r.result.value);
      break;
    case ERROR:
      printf("%s", r.result.reason);
      break;
    default:
      break;
  }

  return 0;
}
