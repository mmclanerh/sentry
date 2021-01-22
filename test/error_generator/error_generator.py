import sys
import argparse
import sentry_sdk

from random import seed
from random import random

def main(argv):
  if len(argv) != 1:
    print(f"{sys.argv[0]} only takes 1 argument.  Pass the project DSN only")
    sys.exit(1)

  # Read the auth token and dsn
  dsn = argv[0]

  # seed random number generator
  seed(1)

  sentry_sdk.init(dsn)
  sentry_sdk.capture_exception(Exception(f"This is an example of an error message with random number {random()}"))

if __name__ == "__main__":
   main(sys.argv[1:])
