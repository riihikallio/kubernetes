#! python

import datetime
import time
import uuid

val = str(uuid.uuid4())

while(True):
    print(str(datetime.datetime.now()) + ": " + val)
    time.sleep(5)
