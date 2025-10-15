# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - link "QuickTest Quick Test" [ref=e5] [cursor=pointer]:
      - /url: /quick-test
      - img "QuickTest" [ref=e6]
      - text: Quick Test
    - generic [ref=e8]:
      - heading "Sign in to your account" [level=1] [ref=e9]
      - generic [ref=e10]:
        - generic [ref=e11]:
          - generic [ref=e12]: Your email
          - textbox "Your email" [ref=e13]:
            - /placeholder: name@company.com
            - text: neha.arora2@crownstack.com
        - generic [ref=e14]:
          - generic [ref=e15]: Password
          - textbox "Password" [ref=e16]:
            - /placeholder: ••••••••
            - text: wrongPass
        - generic [ref=e17]:
          - generic [ref=e21]:
            - checkbox "Remember me" [ref=e23]
            - generic [ref=e24]: Remember me
          - link "Forgot password?" [ref=e25] [cursor=pointer]:
            - /url: /forgot-password
        - button "Sign in" [ref=e26] [cursor=pointer]
      - generic [ref=e31]:
        - text: Don’t have an account yet?
        - link "Sign up" [ref=e32] [cursor=pointer]:
          - /url: /signup
  - alert [ref=e36]:
    - img [ref=e38]
    - generic [ref=e40]: Invalid email or password. Please try again.
    - button "Close" [ref=e41] [cursor=pointer]:
      - generic [ref=e42]: Close
      - img [ref=e43]
```