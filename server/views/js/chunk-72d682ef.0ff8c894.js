(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-72d682ef'],
  {
    '1a96': function (t, e, c) {
      'use strict';
      var a = c('7a23'),
        s = Object(a['E'])('data-v-050e7b30');
      Object(a['s'])('data-v-050e7b30');
      var r = {class: 'card shadow bg-dark text-center d-flex'},
        n = {class: 'card-body'},
        d = {class: 'row'},
        i = {class: 'col-md-3'},
        o = {class: 'col-md-3 p-4'},
        b = {class: 'align-middle'},
        l = {class: 'col-md-3 align-middle p-4'},
        u = Object(a['g'])(
          'div',
          {class: 'col-md-3 p-4'},
          [Object(a['g'])('i', {class: 'fa fa-play-circle play'})],
          -1
        );
      Object(a['q'])();
      var O = s(function (t, e, c, s, O, j) {
          return (
            Object(a['p'])(),
            Object(a['d'])('div', r, [
              Object(a['g'])('div', n, [
                Object(a['g'])('div', d, [
                  Object(a['g'])('div', i, [
                    Object(a['g'])(
                      'object',
                      {data: c.data.image, class: 'thumbnail'},
                      null,
                      8,
                      ['data']
                    ),
                  ]),
                  Object(a['g'])('div', o, [
                    Object(a['g'])('span', b, Object(a['y'])(c.data.title), 1),
                  ]),
                  Object(a['g'])('div', l, [
                    Object(a['g'])(
                      'span',
                      null,
                      Object(a['y'])(c.data.artist),
                      1
                    ),
                  ]),
                  u,
                ]),
              ]),
            ])
          );
        }),
        j = {
          name: 'MusicCard',
          data: function () {
            return {};
          },
          props: {data: {type: Object, required: !0}},
        };
      c('7f30');
      (j.render = O), (j.__scopeId = 'data-v-050e7b30');
      e['a'] = j;
    },
    '7f30': function (t, e, c) {
      'use strict';
      c('e0fd');
    },
    b210: function (t, e, c) {
      'use strict';
      c.r(e);
      var a = c('7a23'),
        s = {class: 'browse component'},
        r = {class: 'container p-5'},
        n = Object(a['g'])('h1', {class: 'text-center pt-5 p-3'}, 'BROWSE', -1),
        d = {class: 'text-danger text-center'},
        i = {class: 'Tracks p-3'};
      function o(t, e, c, o, b, l) {
        var u = Object(a['w'])('MusicCard');
        return (
          Object(a['p'])(),
          Object(a['d'])('div', s, [
            Object(a['g'])('div', r, [
              n,
              Object(a['g'])('p', d, Object(a['y'])(b.errorMessage), 1),
              Object(a['g'])('div', i, [
                Object(a['g'])('div', null, [
                  (Object(a['p'])(!0),
                  Object(a['d'])(
                    a['a'],
                    null,
                    Object(a['v'])(b.tracks, function (t) {
                      return (
                        Object(a['p'])(),
                        Object(a['d'])('span', {key: t._id}, [
                          Object(a['g'])(u, {data: t}, null, 8, ['data']),
                        ])
                      );
                    }),
                    128
                  )),
                ]),
              ]),
            ]),
          ])
        );
      }
      var b = c('1a96'),
        l = {
          name: 'Browse',
          components: {MusicCard: b['a']},
          data: function () {
            return {tracks: [], errorMessage: ''};
          },
          created: function () {
            var t = this;
            this.$store
              .dispatch('utils/fetchTracks', {sort: !0})
              .then(function (e) {
                0 === e.length
                  ? (t.errorMessage = 'Whoops! No Tracks')
                  : (t.tracks = e);
              })
              .catch(function (e) {
                t.errorMessage = 'Oh,No We Encountered an Error';
              });
          },
        };
      l.render = o;
      e['default'] = l;
    },
    e0fd: function (t, e, c) {},
  },
]);
//# sourceMappingURL=chunk-72d682ef.0ff8c894.js.map
