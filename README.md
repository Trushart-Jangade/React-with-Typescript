React with Type script

create-react-app my-app --scripts-version=react-scripts-ts



tslint.json changes

-  "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
+  "extends": [],
+  "defaultSeverity": "warning",


Set default props



came to know that 
0 || 5  will return 5... as 0 is cunsidered as false