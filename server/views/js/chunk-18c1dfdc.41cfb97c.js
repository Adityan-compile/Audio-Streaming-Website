(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-18c1dfdc'],
  {
    2679: function (e, t, a) {
      'use strict';
      a.r(t);
      var r = a('7a23'),
        s = {class: 'component container p-5'},
        o = Object(r['g'])(
          'h1',
          {class: 'text-center pt-5 p-3'},
          'UPLOAD NEW TRACK',
          -1
        ),
        n = {class: 'text-danger'},
        c = {class: 'text-success'},
        l = {key: 0};
      function i(e, t, a, i, u, p) {
        var d = Object(r['w'])('UploadForm'),
          b = Object(r['w'])('ProgressBar');
        return (
          Object(r['p'])(),
          Object(r['d'])('div', s, [
            o,
            Object(r['g'])('p', n, Object(r['y'])(u.errorMessage), 1),
            Object(r['g'])('p', c, Object(r['y'])(u.successMessage), 1),
            Object(r['g'])('div', null, [
              Object(r['g'])(
                d,
                {
                  onUpload: p.setUploadStatus,
                  onSuccess: p.uploadSuccess,
                  onError: p.uploadError,
                },
                null,
                8,
                ['onUpload', 'onSuccess', 'onError']
              ),
            ]),
            u.uploading
              ? (Object(r['p'])(),
                Object(r['d'])('div', l, [
                  Object(r['g'])(b, {progress: u.uploadProgress}, null, 8, [
                    'progress',
                  ]),
                ]))
              : Object(r['e'])('', !0),
          ])
        );
      }
      var u = Object(r['E'])('data-v-757ab764');
      Object(r['s'])('data-v-757ab764');
      var p = {class: 'upload-form component p-5'},
        d = {class: 'col-md-6'},
        b = Object(r['g'])(
          'label',
          {for: 'title', class: 'form-label'},
          'Title',
          -1
        ),
        g = {class: 'col-md-6'},
        f = Object(r['g'])(
          'label',
          {for: 'artist', class: 'form-label'},
          'Artist',
          -1
        ),
        m = {class: 'col-lg-4'},
        j = Object(r['g'])(
          'label',
          {for: 'year', class: 'form-label'},
          'Release Year',
          -1
        ),
        O = {class: 'col-lg-4'},
        v = Object(r['g'])(
          'label',
          {for: 'thumbnail', class: 'form-label'},
          'Thumbnail Image',
          -1
        ),
        h = {
          class: 'form-control file-input',
          type: 'file',
          id: 'thumbnail',
          ref: 'thumbnail',
          name: 'thumbnail',
          accept: 'image/jpg,image/png,image/jpeg',
          required: '',
        },
        y = Object(r['g'])('p', {class: 'text-muted'}, 'jpeg,jpg,png', -1),
        N = {class: 'col-lg-4'},
        E = Object(r['g'])(
          'label',
          {for: 'audio', class: 'form-label'},
          'Audio File',
          -1
        ),
        I = {
          class: 'form-control file-input',
          type: 'file',
          id: 'audio',
          ref: 'audio',
          name: 'audio',
          accept: 'audio/mp3,audio/m4a',
          required: '',
        },
        A = Object(r['g'])('p', {class: 'text-muted'}, 'mp3, m4a', -1),
        U = Object(r['g'])(
          'div',
          {class: 'col-12'},
          [
            Object(r['g'])(
              'button',
              {type: 'submit', class: 'btn btn-outline-info'},
              'Start Upload'
            ),
          ],
          -1
        );
      Object(r['q'])();
      var S = u(function (e, t, a, s, o, n) {
          return (
            Object(r['p'])(),
            Object(r['d'])('div', p, [
              Object(r['g'])(
                'form',
                {
                  class: 'row g-3',
                  id: 'uploadForm',
                  onSubmit:
                    t[4] ||
                    (t[4] = Object(r['D'])(
                      function () {
                        return n.upload && n.upload.apply(n, arguments);
                      },
                      ['prevent']
                    )),
                  name: 'uploadForm',
                },
                [
                  Object(r['g'])('div', d, [
                    b,
                    Object(r['C'])(
                      Object(r['g'])(
                        'input',
                        {
                          type: 'text',
                          class: 'form-control text-input',
                          placeholder: 'Never Gonna Give You Up',
                          'onUpdate:modelValue':
                            t[1] ||
                            (t[1] = function (e) {
                              return (o.title = e);
                            }),
                          id: 'title',
                          name: 'title',
                          required: '',
                        },
                        null,
                        512
                      ),
                      [[r['A'], o.title]]
                    ),
                  ]),
                  Object(r['g'])('div', g, [
                    f,
                    Object(r['C'])(
                      Object(r['g'])(
                        'input',
                        {
                          type: 'text',
                          class: 'form-control text-input',
                          placeholder: 'Rick Astley',
                          id: 'artist',
                          'onUpdate:modelValue':
                            t[2] ||
                            (t[2] = function (e) {
                              return (o.artist = e);
                            }),
                          name: 'artist',
                          required: '',
                        },
                        null,
                        512
                      ),
                      [[r['A'], o.artist]]
                    ),
                  ]),
                  Object(r['g'])('div', m, [
                    j,
                    Object(r['C'])(
                      Object(r['g'])(
                        'input',
                        {
                          type: 'year',
                          class: 'form-control text-input',
                          'onUpdate:modelValue':
                            t[3] ||
                            (t[3] = function (e) {
                              return (o.year = e);
                            }),
                          id: 'year',
                          name: 'year',
                          required: '',
                        },
                        null,
                        512
                      ),
                      [[r['A'], o.year]]
                    ),
                  ]),
                  Object(r['g'])('div', O, [
                    v,
                    Object(r['g'])('input', h, null, 512),
                    y,
                  ]),
                  Object(r['g'])('div', N, [
                    E,
                    Object(r['g'])('input', I, null, 512),
                    A,
                  ]),
                  U,
                ],
                32
              ),
            ])
          );
        }),
        x = {
          name: 'UploadForm',
          data: function () {
            return {
              title: '',
              artist: '',
              year: new Date().getFullYear() || '',
            };
          },
          methods: {
            upload: function () {
              var e = this,
                t = new FormData();
              t.append('title', this.title),
                t.append('artist', this.artist),
                t.append('year', this.year),
                t.append('thumbnail', this.$refs.thumbnail.files[0]),
                t.append('audio', this.$refs.audio.files[0]),
                this.$emit('upload', !0),
                this.$store
                  .dispatch('uploads/uploadTrack', t)
                  .then(function (t) {
                    e.$emit('upload', !1), e.$emit('success', 'success');
                  })
                  .catch(function (t) {
                    e.$emit('upload', !1), e.$emit('error', 'error');
                  });
            },
          },
        };
      a('d8b7');
      (x.render = S), (x.__scopeId = 'data-v-757ab764');
      var w = x,
        F = {class: 'progressBar component p-5'},
        T = {class: 'progress'};
      function M(e, t, a, s, o, n) {
        return (
          Object(r['p'])(),
          Object(r['d'])('div', F, [
            Object(r['g'])('div', T, [
              Object(r['g'])(
                'div',
                {
                  class:
                    'progress-bar progress-bar-striped progress-bar-animated',
                  role: 'progressbar',
                  'aria-valuenow': a.progress,
                  'aria-valuemin': '0',
                  'aria-valuemax': '100',
                  style: 'width: ' + a.progress + '%;',
                },
                null,
                12,
                ['aria-valuenow']
              ),
            ]),
          ])
        );
      }
      a('a9e3');
      var k = {
        name: 'ProgressBar',
        props: {progress: {type: Number, default: 0}},
      };
      k.render = M;
      var _ = k,
        P = {
          name: 'Upload',
          data: function () {
            return {
              uploading: !1,
              uploadProgress: 0,
              successMessage: '',
              errorMessage: '',
            };
          },
          methods: {
            setUploadStatus: function (e) {
              console.log('Setting Upload Status'), (this.uploading = e);
            },
            uploadSuccess: function () {
              this.successMessage = 'Track Uploaded Successfully';
            },
            uploadError: function () {
              (this.successMessage = ''),
                (this.errorMessage = 'Error Uploading Track Please Try Again');
            },
          },
          components: {UploadForm: w, ProgressBar: _},
        };
      P.render = i;
      t['default'] = P;
    },
    5899: function (e, t) {
      e.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff';
    },
    '58a8': function (e, t, a) {
      var r = a('1d80'),
        s = a('5899'),
        o = '[' + s + ']',
        n = RegExp('^' + o + o + '*'),
        c = RegExp(o + o + '*$'),
        l = function (e) {
          return function (t) {
            var a = String(r(t));
            return (
              1 & e && (a = a.replace(n, '')),
              2 & e && (a = a.replace(c, '')),
              a
            );
          };
        };
      e.exports = {start: l(1), end: l(2), trim: l(3)};
    },
    7156: function (e, t, a) {
      var r = a('861d'),
        s = a('d2bb');
      e.exports = function (e, t, a) {
        var o, n;
        return (
          s &&
            'function' == typeof (o = t.constructor) &&
            o !== a &&
            r((n = o.prototype)) &&
            n !== a.prototype &&
            s(e, n),
          e
        );
      };
    },
    a9e3: function (e, t, a) {
      'use strict';
      var r = a('83ab'),
        s = a('da84'),
        o = a('94ca'),
        n = a('6eeb'),
        c = a('5135'),
        l = a('c6b6'),
        i = a('7156'),
        u = a('c04e'),
        p = a('d039'),
        d = a('7c73'),
        b = a('241c').f,
        g = a('06cf').f,
        f = a('9bf2').f,
        m = a('58a8').trim,
        j = 'Number',
        O = s[j],
        v = O.prototype,
        h = l(d(v)) == j,
        y = function (e) {
          var t,
            a,
            r,
            s,
            o,
            n,
            c,
            l,
            i = u(e, !1);
          if ('string' == typeof i && i.length > 2)
            if (((i = m(i)), (t = i.charCodeAt(0)), 43 === t || 45 === t)) {
              if (((a = i.charCodeAt(2)), 88 === a || 120 === a)) return NaN;
            } else if (48 === t) {
              switch (i.charCodeAt(1)) {
                case 66:
                case 98:
                  (r = 2), (s = 49);
                  break;
                case 79:
                case 111:
                  (r = 8), (s = 55);
                  break;
                default:
                  return +i;
              }
              for (o = i.slice(2), n = o.length, c = 0; c < n; c++)
                if (((l = o.charCodeAt(c)), l < 48 || l > s)) return NaN;
              return parseInt(o, r);
            }
          return +i;
        };
      if (o(j, !O(' 0o1') || !O('0b1') || O('+0x1'))) {
        for (
          var N,
            E = function (e) {
              var t = arguments.length < 1 ? 0 : e,
                a = this;
              return a instanceof E &&
                (h
                  ? p(function () {
                      v.valueOf.call(a);
                    })
                  : l(a) != j)
                ? i(new O(y(t)), a, E)
                : y(t);
            },
            I = r
              ? b(O)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range'.split(
                  ','
                ),
            A = 0;
          I.length > A;
          A++
        )
          c(O, (N = I[A])) && !c(E, N) && f(E, N, g(O, N));
        (E.prototype = v), (v.constructor = E), n(s, j, E);
      }
    },
    d8b7: function (e, t, a) {
      'use strict';
      a('daa8');
    },
    daa8: function (e, t, a) {},
  },
]);
//# sourceMappingURL=chunk-18c1dfdc.41cfb97c.js.map
