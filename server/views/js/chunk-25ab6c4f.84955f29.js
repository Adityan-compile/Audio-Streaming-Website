(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-25ab6c4f'],
  {
    '261e': function (e, t, a) {},
    '34c3': function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a('7a23'),
        s = {class: 'signup component'},
        c = {class: 'container p-5'},
        r = Object(n['g'])(
          'h1',
          {class: 'text-center pt-5 p-3'},
          'Join Us',
          -1
        ),
        o = {class: 'container'};
      function i(e, t, a, i, l, b) {
        var p = Object(n['w'])('SignupForm');
        return (
          Object(n['p'])(),
          Object(n['d'])('div', s, [
            Object(n['g'])('div', c, [
              r,
              Object(n['g'])('div', o, [Object(n['g'])(p)]),
            ]),
          ])
        );
      }
      a('b0c0');
      var l = Object(n['E'])('data-v-82b6bf12');
      Object(n['s'])('data-v-82b6bf12');
      var b = {class: 'text-danger text-center'},
        p = {class: 'mb-3'},
        u = Object(n['g'])(
          'label',
          {for: 'name', class: 'form-label'},
          'Name:',
          -1
        ),
        m = {class: 'mb-3'},
        d = Object(n['g'])(
          'label',
          {for: 'email', class: 'form-label'},
          'Email address:',
          -1
        ),
        g = {class: 'mb-3'},
        j = Object(n['g'])(
          'label',
          {for: 'password', class: 'form-label'},
          'Password:',
          -1
        ),
        O = {class: 'p-3 pt-5'};
      Object(n['q'])();
      var f = l(function (e, t, a, s, c, r) {
          return (
            Object(n['p'])(),
            Object(n['d'])('form', null, [
              Object(n['g'])('p', b, Object(n['y'])(c.message), 1),
              Object(n['g'])('div', p, [
                u,
                Object(n['C'])(
                  Object(n['g'])(
                    'input',
                    {
                      type: 'text',
                      'onUpdate:modelValue':
                        t[1] ||
                        (t[1] = function (e) {
                          return (c.name = e);
                        }),
                      class: 'form-control',
                      id: 'name',
                      name: 'name',
                    },
                    null,
                    512
                  ),
                  [[n['A'], c.name]]
                ),
              ]),
              Object(n['g'])('div', m, [
                d,
                Object(n['C'])(
                  Object(n['g'])(
                    'input',
                    {
                      type: 'email',
                      'onUpdate:modelValue':
                        t[2] ||
                        (t[2] = function (e) {
                          return (c.email = e);
                        }),
                      class: 'form-control',
                      id: 'email',
                      name: 'email',
                    },
                    null,
                    512
                  ),
                  [[n['A'], c.email]]
                ),
              ]),
              Object(n['g'])('div', g, [
                j,
                Object(n['C'])(
                  Object(n['g'])(
                    'input',
                    {
                      type: 'password',
                      'onUpdate:modelValue':
                        t[3] ||
                        (t[3] = function (e) {
                          return (c.password = e);
                        }),
                      class: 'form-control',
                      id: 'password',
                      name: 'password',
                    },
                    null,
                    512
                  ),
                  [[n['A'], c.password]]
                ),
              ]),
              Object(n['g'])('div', O, [
                Object(n['g'])(
                  'button',
                  {
                    type: 'submit',
                    class: 'btn btn-primary',
                    onClick:
                      t[4] ||
                      (t[4] = Object(n['D'])(
                        function () {
                          return r.signup && r.signup.apply(r, arguments);
                        },
                        ['prevent']
                      )),
                  },
                  ' Sign Up '
                ),
              ]),
            ])
          );
        }),
        v =
          (a('4360'),
          {
            name: 'SignupForm',
            data: function () {
              return {name: '', email: '', password: '', message: ''};
            },
            methods: {
              signup: function () {
                var e = this;
                console.log(this),
                  this.$store
                    .dispatch('auth/register', {
                      name: this.name,
                      email: this.email,
                      password: this.password,
                    })
                    .then(function (t) {
                      e.$router.push('/');
                    })
                    .catch(function (t) {
                      console.error(t),
                        (e.message =
                          'Registration Error: Please try again later:'),
                        e.$router.push('/signup');
                    });
              },
            },
          });
      a('673e');
      (v.render = f), (v.__scopeId = 'data-v-82b6bf12');
      var w = v,
        h = {components: {SignupForm: w}};
      h.render = i;
      t['default'] = h;
    },
    '673e': function (e, t, a) {
      'use strict';
      a('261e');
    },
  },
]);
//# sourceMappingURL=chunk-25ab6c4f.84955f29.js.map
