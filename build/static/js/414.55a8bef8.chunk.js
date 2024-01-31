'use strict';
(self.webpackChunkpeak_to_planets_memory_game =
	self.webpackChunkpeak_to_planets_memory_game || []).push([
	[414],
	{
		6414: (e, t, n) => {
			function o(e) {
				return (e && e.ownerDocument) || document;
			}
			function r(e) {
				return o(e).defaultView || window;
			}
			function i(e, t) {
				t
					? e.setAttribute('aria-hidden', 'true')
					: e.removeAttribute('aria-hidden');
			}
			function s(e) {
				return parseInt(r(e).getComputedStyle(e).paddingRight, 10) || 0;
			}
			function a(e, t, n, o, r) {
				const s = [t, n, ...o];
				[].forEach.call(e.children, (e) => {
					const t = -1 === s.indexOf(e),
						n = !(function (e) {
							const t =
									-1 !==
									[
										'TEMPLATE',
										'SCRIPT',
										'STYLE',
										'LINK',
										'MAP',
										'META',
										'NOSCRIPT',
										'PICTURE',
										'COL',
										'COLGROUP',
										'PARAM',
										'SLOT',
										'SOURCE',
										'TRACK',
									].indexOf(e.tagName),
								n =
									'INPUT' === e.tagName && 'hidden' === e.getAttribute('type');
							return t || n;
						})(e);
					t && n && i(e, r);
				});
			}
			function l(e, t) {
				let n = -1;
				return e.some((e, o) => !!t(e) && ((n = o), !0)), n;
			}
			function c(e, t) {
				const n = [],
					i = e.container;
				if (!t.disableScrollLock) {
					if (
						(function (e) {
							const t = o(e);
							return t.body === e
								? r(e).innerWidth > t.documentElement.clientWidth
								: e.scrollHeight > e.clientHeight;
						})(i)
					) {
						const e = (function (e) {
							const t = e.documentElement.clientWidth;
							return Math.abs(window.innerWidth - t);
						})(o(i));
						n.push({
							value: i.style.paddingRight,
							property: 'padding-right',
							el: i,
						}),
							(i.style.paddingRight = ''.concat(s(i) + e, 'px'));
						const t = o(i).querySelectorAll('.mui-fixed');
						[].forEach.call(t, (t) => {
							n.push({
								value: t.style.paddingRight,
								property: 'padding-right',
								el: t,
							}),
								(t.style.paddingRight = ''.concat(s(t) + e, 'px'));
						});
					}
					let e;
					if (i.parentNode instanceof DocumentFragment) e = o(i).body;
					else {
						const t = i.parentElement,
							n = r(i);
						e =
							'HTML' === (null == t ? void 0 : t.nodeName) &&
							'scroll' === n.getComputedStyle(t).overflowY
								? t
								: i;
					}
					n.push(
						{ value: e.style.overflow, property: 'overflow', el: e },
						{ value: e.style.overflowX, property: 'overflow-x', el: e },
						{ value: e.style.overflowY, property: 'overflow-y', el: e }
					),
						(e.style.overflow = 'hidden');
				}
				return () => {
					n.forEach((e) => {
						let { value: t, el: n, property: o } = e;
						t ? n.style.setProperty(o, t) : n.style.removeProperty(o);
					});
				};
			}
			n.r(t),
				n.d(t, {
					ModalManager: () => u,
					default: () => de,
					getModalUtilityClass: () => ie,
					modalClasses: () => se,
				});
			class u {
				constructor() {
					(this.containers = void 0),
						(this.modals = void 0),
						(this.modals = []),
						(this.containers = []);
				}
				add(e, t) {
					let n = this.modals.indexOf(e);
					if (-1 !== n) return n;
					(n = this.modals.length),
						this.modals.push(e),
						e.modalRef && i(e.modalRef, !1);
					const o = (function (e) {
						const t = [];
						return (
							[].forEach.call(e.children, (e) => {
								'true' === e.getAttribute('aria-hidden') && t.push(e);
							}),
							t
						);
					})(t);
					a(t, e.mount, e.modalRef, o, !0);
					const r = l(this.containers, (e) => e.container === t);
					return -1 !== r
						? (this.containers[r].modals.push(e), n)
						: (this.containers.push({
								modals: [e],
								container: t,
								restore: null,
								hiddenSiblings: o,
						  }),
						  n);
				}
				mount(e, t) {
					const n = l(this.containers, (t) => -1 !== t.modals.indexOf(e)),
						o = this.containers[n];
					o.restore || (o.restore = c(o, t));
				}
				remove(e) {
					let t =
						!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					const n = this.modals.indexOf(e);
					if (-1 === n) return n;
					const o = l(this.containers, (t) => -1 !== t.modals.indexOf(e)),
						r = this.containers[o];
					if (
						(r.modals.splice(r.modals.indexOf(e), 1),
						this.modals.splice(n, 1),
						0 === r.modals.length)
					)
						r.restore && r.restore(),
							e.modalRef && i(e.modalRef, t),
							a(r.container, e.mount, e.modalRef, r.hiddenSiblings, !1),
							this.containers.splice(o, 1);
					else {
						const e = r.modals[r.modals.length - 1];
						e.modalRef && i(e.modalRef, !1);
					}
					return n;
				}
				isTopModal(e) {
					return (
						this.modals.length > 0 && this.modals[this.modals.length - 1] === e
					);
				}
			}
			var d = n(3366),
				p = n(7462),
				f = n(2791),
				m = n(3733),
				h = n(6117);
			function E(e) {
				let t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
				if (void 0 === e) return {};
				const n = {};
				return (
					Object.keys(e)
						.filter(
							(n) =>
								n.match(/^on[A-Z]/) &&
								'function' === typeof e[n] &&
								!t.includes(n)
						)
						.forEach((t) => {
							n[t] = e[t];
						}),
					n
				);
			}
			function v(e) {
				if (void 0 === e) return {};
				const t = {};
				return (
					Object.keys(e)
						.filter((t) => !(t.match(/^on[A-Z]/) && 'function' === typeof e[t]))
						.forEach((n) => {
							t[n] = e[n];
						}),
					t
				);
			}
			const b = [
				'elementType',
				'externalSlotProps',
				'ownerState',
				'skipResolvingSlotProps',
			];
			function x(e) {
				var t;
				const {
						elementType: n,
						externalSlotProps: o,
						ownerState: r,
						skipResolvingSlotProps: i = !1,
					} = e,
					s = (0, d.Z)(e, b),
					a = i
						? {}
						: (function (e, t, n) {
								return 'function' === typeof e ? e(t, n) : e;
						  })(o, r),
					{ props: l, internalRef: c } = (function (e) {
						const {
							getSlotProps: t,
							additionalProps: n,
							externalSlotProps: o,
							externalForwardedProps: r,
							className: i,
						} = e;
						if (!t) {
							const e = (0, m.Z)(
									null == n ? void 0 : n.className,
									i,
									null == r ? void 0 : r.className,
									null == o ? void 0 : o.className
								),
								t = (0, p.Z)(
									{},
									null == n ? void 0 : n.style,
									null == r ? void 0 : r.style,
									null == o ? void 0 : o.style
								),
								s = (0, p.Z)({}, n, r, o);
							return (
								e.length > 0 && (s.className = e),
								Object.keys(t).length > 0 && (s.style = t),
								{ props: s, internalRef: void 0 }
							);
						}
						const s = E((0, p.Z)({}, r, o)),
							a = v(o),
							l = v(r),
							c = t(s),
							u = (0, m.Z)(
								null == c ? void 0 : c.className,
								null == n ? void 0 : n.className,
								i,
								null == r ? void 0 : r.className,
								null == o ? void 0 : o.className
							),
							d = (0, p.Z)(
								{},
								null == c ? void 0 : c.style,
								null == n ? void 0 : n.style,
								null == r ? void 0 : r.style,
								null == o ? void 0 : o.style
							),
							f = (0, p.Z)({}, c, n, l, a);
						return (
							u.length > 0 && (f.className = u),
							Object.keys(d).length > 0 && (f.style = d),
							{ props: f, internalRef: c.ref }
						);
					})((0, p.Z)({}, s, { externalSlotProps: a })),
					u = (0, h.Z)(
						c,
						null == a ? void 0 : a.ref,
						null == (t = e.additionalProps) ? void 0 : t.ref
					),
					f = (function (e, t, n) {
						return void 0 === e || 'string' === typeof e
							? t
							: (0, p.Z)({}, t, { ownerState: (0, p.Z)({}, t.ownerState, n) });
					})(n, (0, p.Z)({}, l, { ref: u }), r);
				return f;
			}
			var g = n(7054);
			function y() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
					t[n] = arguments[n];
				return t.reduce(
					(e, t) =>
						null == t
							? e
							: function () {
									for (
										var n = arguments.length, o = new Array(n), r = 0;
										r < n;
										r++
									)
										o[r] = arguments[r];
									e.apply(this, o), t.apply(this, o);
							  },
					() => {}
				);
			}
			const k = new u();
			function R(e) {
				const {
						container: t,
						disableEscapeKeyDown: n = !1,
						disableScrollLock: r = !1,
						manager: s = k,
						closeAfterTransition: a = !1,
						onTransitionEnter: l,
						onTransitionExited: c,
						children: u,
						onClose: d,
						open: m,
						rootRef: v,
					} = e,
					b = f.useRef({}),
					x = f.useRef(null),
					R = f.useRef(null),
					S = (0, h.Z)(R, v),
					[T, Z] = f.useState(!m),
					P = (function (e) {
						return !!e && e.props.hasOwnProperty('in');
					})(u);
				let C = !0;
				('false' !== e['aria-hidden'] && !1 !== e['aria-hidden']) || (C = !1);
				const N = () => (
						(b.current.modalRef = R.current),
						(b.current.mount = x.current),
						b.current
					),
					w = () => {
						s.mount(N(), { disableScrollLock: r }),
							R.current && (R.current.scrollTop = 0);
					},
					O = (0, g.Z)(() => {
						const e =
							(function (e) {
								return 'function' === typeof e ? e() : e;
							})(t) || o(x.current).body;
						s.add(N(), e), R.current && w();
					}),
					M = f.useCallback(() => s.isTopModal(N()), [s]),
					I = (0, g.Z)((e) => {
						(x.current = e),
							e && (m && M() ? w() : R.current && i(R.current, C));
					}),
					A = f.useCallback(() => {
						s.remove(N(), C);
					}, [C, s]);
				f.useEffect(
					() => () => {
						A();
					},
					[A]
				),
					f.useEffect(() => {
						m ? O() : (P && a) || A();
					}, [m, A, P, a, O]);
				const D = (e) => (t) => {
						var o;
						null == (o = e.onKeyDown) || o.call(e, t),
							'Escape' === t.key &&
								229 !== t.which &&
								M() &&
								(n || (t.stopPropagation(), d && d(t, 'escapeKeyDown')));
					},
					F = (e) => (t) => {
						var n;
						null == (n = e.onClick) || n.call(e, t),
							t.target === t.currentTarget && d && d(t, 'backdropClick');
					};
				return {
					getRootProps: function () {
						let t =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: {};
						const n = E(e);
						delete n.onTransitionEnter, delete n.onTransitionExited;
						const o = (0, p.Z)({}, n, t);
						return (0, p.Z)({ role: 'presentation' }, o, {
							onKeyDown: D(o),
							ref: S,
						});
					},
					getBackdropProps: function () {
						const e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: {};
						return (0, p.Z)({ 'aria-hidden': !0 }, e, {
							onClick: F(e),
							open: m,
						});
					},
					getTransitionProps: () => ({
						onEnter: y(
							() => {
								Z(!1), l && l();
							},
							null == u ? void 0 : u.props.onEnter
						),
						onExited: y(
							() => {
								Z(!0), c && c(), a && A();
							},
							null == u ? void 0 : u.props.onExited
						),
					}),
					rootRef: S,
					portalRef: I,
					isTopModal: M,
					exited: T,
					hasTransition: P,
				};
			}
			var S = n(4419),
				T = n(184);
			const Z = [
				'input',
				'select',
				'textarea',
				'a[href]',
				'button',
				'[tabindex]',
				'audio[controls]',
				'video[controls]',
				'[contenteditable]:not([contenteditable="false"])',
			].join(',');
			function P(e) {
				const t = [],
					n = [];
				return (
					Array.from(e.querySelectorAll(Z)).forEach((e, o) => {
						const r = (function (e) {
							const t = parseInt(e.getAttribute('tabindex') || '', 10);
							return Number.isNaN(t)
								? 'true' === e.contentEditable ||
								  (('AUDIO' === e.nodeName ||
										'VIDEO' === e.nodeName ||
										'DETAILS' === e.nodeName) &&
										null === e.getAttribute('tabindex'))
									? 0
									: e.tabIndex
								: t;
						})(e);
						-1 !== r &&
							(function (e) {
								return !(
									e.disabled ||
									('INPUT' === e.tagName && 'hidden' === e.type) ||
									(function (e) {
										if ('INPUT' !== e.tagName || 'radio' !== e.type) return !1;
										if (!e.name) return !1;
										const t = (t) =>
											e.ownerDocument.querySelector(
												'input[type="radio"]'.concat(t)
											);
										let n = t('[name="'.concat(e.name, '"]:checked'));
										return (
											n || (n = t('[name="'.concat(e.name, '"]'))), n !== e
										);
									})(e)
								);
							})(e) &&
							(0 === r
								? t.push(e)
								: n.push({ documentOrder: o, tabIndex: r, node: e }));
					}),
					n
						.sort((e, t) =>
							e.tabIndex === t.tabIndex
								? e.documentOrder - t.documentOrder
								: e.tabIndex - t.tabIndex
						)
						.map((e) => e.node)
						.concat(t)
				);
			}
			function C() {
				return !0;
			}
			function N(e) {
				const {
						children: t,
						disableAutoFocus: n = !1,
						disableEnforceFocus: r = !1,
						disableRestoreFocus: i = !1,
						getTabbable: s = P,
						isEnabled: a = C,
						open: l,
					} = e,
					c = f.useRef(!1),
					u = f.useRef(null),
					d = f.useRef(null),
					p = f.useRef(null),
					m = f.useRef(null),
					E = f.useRef(!1),
					v = f.useRef(null),
					b = (0, h.Z)(t.ref, v),
					x = f.useRef(null);
				f.useEffect(() => {
					l && v.current && (E.current = !n);
				}, [n, l]),
					f.useEffect(() => {
						if (!l || !v.current) return;
						const e = o(v.current);
						return (
							v.current.contains(e.activeElement) ||
								(v.current.hasAttribute('tabIndex') ||
									v.current.setAttribute('tabIndex', '-1'),
								E.current && v.current.focus()),
							() => {
								i ||
									(p.current &&
										p.current.focus &&
										((c.current = !0), p.current.focus()),
									(p.current = null));
							}
						);
					}, [l]),
					f.useEffect(() => {
						if (!l || !v.current) return;
						const e = o(v.current),
							t = (t) => {
								(x.current = t),
									!r &&
										a() &&
										'Tab' === t.key &&
										e.activeElement === v.current &&
										t.shiftKey &&
										((c.current = !0), d.current && d.current.focus());
							},
							n = () => {
								const t = v.current;
								if (null === t) return;
								if (!e.hasFocus() || !a() || c.current)
									return void (c.current = !1);
								if (t.contains(e.activeElement)) return;
								if (
									r &&
									e.activeElement !== u.current &&
									e.activeElement !== d.current
								)
									return;
								if (e.activeElement !== m.current) m.current = null;
								else if (null !== m.current) return;
								if (!E.current) return;
								let n = [];
								if (
									((e.activeElement !== u.current &&
										e.activeElement !== d.current) ||
										(n = s(v.current)),
									n.length > 0)
								) {
									var o, i;
									const e = Boolean(
											(null == (o = x.current) ? void 0 : o.shiftKey) &&
												'Tab' === (null == (i = x.current) ? void 0 : i.key)
										),
										t = n[0],
										r = n[n.length - 1];
									'string' !== typeof t &&
										'string' !== typeof r &&
										(e ? r.focus() : t.focus());
								} else t.focus();
							};
						e.addEventListener('focusin', n),
							e.addEventListener('keydown', t, !0);
						const i = setInterval(() => {
							e.activeElement && 'BODY' === e.activeElement.tagName && n();
						}, 50);
						return () => {
							clearInterval(i),
								e.removeEventListener('focusin', n),
								e.removeEventListener('keydown', t, !0);
						};
					}, [n, r, i, a, l, s]);
				const g = (e) => {
					null === p.current && (p.current = e.relatedTarget), (E.current = !0);
				};
				return (0, T.jsxs)(f.Fragment, {
					children: [
						(0, T.jsx)('div', {
							tabIndex: l ? 0 : -1,
							onFocus: g,
							ref: u,
							'data-testid': 'sentinelStart',
						}),
						f.cloneElement(t, {
							ref: b,
							onFocus: (e) => {
								null === p.current && (p.current = e.relatedTarget),
									(E.current = !0),
									(m.current = e.target);
								const n = t.props.onFocus;
								n && n(e);
							},
						}),
						(0, T.jsx)('div', {
							tabIndex: l ? 0 : -1,
							onFocus: g,
							ref: d,
							'data-testid': 'sentinelEnd',
						}),
					],
				});
			}
			var w = n(4164),
				O = n(2876),
				M = n(2971);
			const I = f.forwardRef(function (e, t) {
				const { children: n, container: o, disablePortal: r = !1 } = e,
					[i, s] = f.useState(null),
					a = (0, h.Z)(f.isValidElement(n) ? n.ref : null, t);
				if (
					((0, O.Z)(() => {
						r ||
							s(
								(function (e) {
									return 'function' === typeof e ? e() : e;
								})(o) || document.body
							);
					}, [o, r]),
					(0, O.Z)(() => {
						if (i && !r)
							return (
								(0, M.Z)(t, i),
								() => {
									(0, M.Z)(t, null);
								}
							);
					}, [t, i, r]),
					r)
				) {
					if (f.isValidElement(n)) {
						const e = { ref: a };
						return f.cloneElement(n, e);
					}
					return (0, T.jsx)(f.Fragment, { children: n });
				}
				return (0, T.jsx)(f.Fragment, {
					children: i ? w.createPortal(n, i) : i,
				});
			});
			var A = n(6934),
				D = n(1402),
				F = n(1721);
			const L = !1;
			var j = n(5545),
				B = 'unmounted',
				U = 'exited',
				K = 'entering',
				_ = 'entered',
				W = 'exiting',
				H = (function (e) {
					function t(t, n) {
						var o;
						o = e.call(this, t, n) || this;
						var r,
							i = n && !n.isMounting ? t.enter : t.appear;
						return (
							(o.appearStatus = null),
							t.in
								? i
									? ((r = U), (o.appearStatus = K))
									: (r = _)
								: (r = t.unmountOnExit || t.mountOnEnter ? B : U),
							(o.state = { status: r }),
							(o.nextCallback = null),
							o
						);
					}
					(0, F.Z)(t, e),
						(t.getDerivedStateFromProps = function (e, t) {
							return e.in && t.status === B ? { status: U } : null;
						});
					var n = t.prototype;
					return (
						(n.componentDidMount = function () {
							this.updateStatus(!0, this.appearStatus);
						}),
						(n.componentDidUpdate = function (e) {
							var t = null;
							if (e !== this.props) {
								var n = this.state.status;
								this.props.in
									? n !== K && n !== _ && (t = K)
									: (n !== K && n !== _) || (t = W);
							}
							this.updateStatus(!1, t);
						}),
						(n.componentWillUnmount = function () {
							this.cancelNextCallback();
						}),
						(n.getTimeouts = function () {
							var e,
								t,
								n,
								o = this.props.timeout;
							return (
								(e = t = n = o),
								null != o &&
									'number' !== typeof o &&
									((e = o.exit),
									(t = o.enter),
									(n = void 0 !== o.appear ? o.appear : t)),
								{ exit: e, enter: t, appear: n }
							);
						}),
						(n.updateStatus = function (e, t) {
							if ((void 0 === e && (e = !1), null !== t))
								if ((this.cancelNextCallback(), t === K)) {
									if (this.props.unmountOnExit || this.props.mountOnEnter) {
										var n = this.props.nodeRef
											? this.props.nodeRef.current
											: w.findDOMNode(this);
										n &&
											(function (e) {
												e.scrollTop;
											})(n);
									}
									this.performEnter(e);
								} else this.performExit();
							else
								this.props.unmountOnExit &&
									this.state.status === U &&
									this.setState({ status: B });
						}),
						(n.performEnter = function (e) {
							var t = this,
								n = this.props.enter,
								o = this.context ? this.context.isMounting : e,
								r = this.props.nodeRef ? [o] : [w.findDOMNode(this), o],
								i = r[0],
								s = r[1],
								a = this.getTimeouts(),
								l = o ? a.appear : a.enter;
							(!e && !n) || L
								? this.safeSetState({ status: _ }, function () {
										t.props.onEntered(i);
								  })
								: (this.props.onEnter(i, s),
								  this.safeSetState({ status: K }, function () {
										t.props.onEntering(i, s),
											t.onTransitionEnd(l, function () {
												t.safeSetState({ status: _ }, function () {
													t.props.onEntered(i, s);
												});
											});
								  }));
						}),
						(n.performExit = function () {
							var e = this,
								t = this.props.exit,
								n = this.getTimeouts(),
								o = this.props.nodeRef ? void 0 : w.findDOMNode(this);
							t && !L
								? (this.props.onExit(o),
								  this.safeSetState({ status: W }, function () {
										e.props.onExiting(o),
											e.onTransitionEnd(n.exit, function () {
												e.safeSetState({ status: U }, function () {
													e.props.onExited(o);
												});
											});
								  }))
								: this.safeSetState({ status: U }, function () {
										e.props.onExited(o);
								  });
						}),
						(n.cancelNextCallback = function () {
							null !== this.nextCallback &&
								(this.nextCallback.cancel(), (this.nextCallback = null));
						}),
						(n.safeSetState = function (e, t) {
							(t = this.setNextCallback(t)), this.setState(e, t);
						}),
						(n.setNextCallback = function (e) {
							var t = this,
								n = !0;
							return (
								(this.nextCallback = function (o) {
									n && ((n = !1), (t.nextCallback = null), e(o));
								}),
								(this.nextCallback.cancel = function () {
									n = !1;
								}),
								this.nextCallback
							);
						}),
						(n.onTransitionEnd = function (e, t) {
							this.setNextCallback(t);
							var n = this.props.nodeRef
									? this.props.nodeRef.current
									: w.findDOMNode(this),
								o = null == e && !this.props.addEndListener;
							if (n && !o) {
								if (this.props.addEndListener) {
									var r = this.props.nodeRef
											? [this.nextCallback]
											: [n, this.nextCallback],
										i = r[0],
										s = r[1];
									this.props.addEndListener(i, s);
								}
								null != e && setTimeout(this.nextCallback, e);
							} else setTimeout(this.nextCallback, 0);
						}),
						(n.render = function () {
							var e = this.state.status;
							if (e === B) return null;
							var t = this.props,
								n = t.children,
								o =
									(t.in,
									t.mountOnEnter,
									t.unmountOnExit,
									t.appear,
									t.enter,
									t.exit,
									t.timeout,
									t.addEndListener,
									t.onEnter,
									t.onEntering,
									t.onEntered,
									t.onExit,
									t.onExiting,
									t.onExited,
									t.nodeRef,
									(0, d.Z)(t, [
										'children',
										'in',
										'mountOnEnter',
										'unmountOnExit',
										'appear',
										'enter',
										'exit',
										'timeout',
										'addEndListener',
										'onEnter',
										'onEntering',
										'onEntered',
										'onExit',
										'onExiting',
										'onExited',
										'nodeRef',
									]));
							return f.createElement(
								j.Z.Provider,
								{ value: null },
								'function' === typeof n
									? n(e, o)
									: f.cloneElement(f.Children.only(n), o)
							);
						}),
						t
					);
				})(f.Component);
			function V() {}
			(H.contextType = j.Z),
				(H.propTypes = {}),
				(H.defaultProps = {
					in: !1,
					mountOnEnter: !1,
					unmountOnExit: !1,
					appear: !1,
					enter: !0,
					exit: !0,
					onEnter: V,
					onEntering: V,
					onEntered: V,
					onExit: V,
					onExiting: V,
					onExited: V,
				}),
				(H.UNMOUNTED = B),
				(H.EXITED = U),
				(H.ENTERING = K),
				(H.ENTERED = _),
				(H.EXITING = W);
			const Y = H;
			var q = n(3967);
			function z(e, t) {
				var n, o;
				const { timeout: r, easing: i, style: s = {} } = e;
				return {
					duration:
						null != (n = s.transitionDuration)
							? n
							: 'number' === typeof r
							? r
							: r[t.mode] || 0,
					easing:
						null != (o = s.transitionTimingFunction)
							? o
							: 'object' === typeof i
							? i[t.mode]
							: i,
					delay: s.transitionDelay,
				};
			}
			var G = n(2071);
			const X = [
					'addEndListener',
					'appear',
					'children',
					'easing',
					'in',
					'onEnter',
					'onEntered',
					'onEntering',
					'onExit',
					'onExited',
					'onExiting',
					'style',
					'timeout',
					'TransitionComponent',
				],
				J = { entering: { opacity: 1 }, entered: { opacity: 1 } },
				Q = f.forwardRef(function (e, t) {
					const n = (0, q.Z)(),
						o = {
							enter: n.transitions.duration.enteringScreen,
							exit: n.transitions.duration.leavingScreen,
						},
						{
							addEndListener: r,
							appear: i = !0,
							children: s,
							easing: a,
							in: l,
							onEnter: c,
							onEntered: u,
							onEntering: m,
							onExit: h,
							onExited: E,
							onExiting: v,
							style: b,
							timeout: x = o,
							TransitionComponent: g = Y,
						} = e,
						y = (0, d.Z)(e, X),
						k = f.useRef(null),
						R = (0, G.Z)(k, s.ref, t),
						S = (e) => (t) => {
							if (e) {
								const n = k.current;
								void 0 === t ? e(n) : e(n, t);
							}
						},
						Z = S(m),
						P = S((e, t) => {
							((e) => {
								e.scrollTop;
							})(e);
							const o = z(
								{ style: b, timeout: x, easing: a },
								{ mode: 'enter' }
							);
							(e.style.webkitTransition = n.transitions.create('opacity', o)),
								(e.style.transition = n.transitions.create('opacity', o)),
								c && c(e, t);
						}),
						C = S(u),
						N = S(v),
						w = S((e) => {
							const t = z(
								{ style: b, timeout: x, easing: a },
								{ mode: 'exit' }
							);
							(e.style.webkitTransition = n.transitions.create('opacity', t)),
								(e.style.transition = n.transitions.create('opacity', t)),
								h && h(e);
						}),
						O = S(E);
					return (0, T.jsx)(
						g,
						(0, p.Z)(
							{
								appear: i,
								in: l,
								nodeRef: k,
								onEnter: P,
								onEntered: C,
								onEntering: Z,
								onExit: w,
								onExited: O,
								onExiting: N,
								addEndListener: (e) => {
									r && r(k.current, e);
								},
								timeout: x,
							},
							y,
							{
								children: (e, t) =>
									f.cloneElement(
										s,
										(0, p.Z)(
											{
												style: (0, p.Z)(
													{
														opacity: 0,
														visibility: 'exited' !== e || l ? void 0 : 'hidden',
													},
													J[e],
													b,
													s.props.style
												),
												ref: R,
											},
											t
										)
									),
							}
						)
					);
				});
			var $ = n(5878),
				ee = n(1217);
			function te(e) {
				return (0, ee.Z)('MuiBackdrop', e);
			}
			(0, $.Z)('MuiBackdrop', ['root', 'invisible']);
			const ne = [
					'children',
					'className',
					'component',
					'components',
					'componentsProps',
					'invisible',
					'open',
					'slotProps',
					'slots',
					'TransitionComponent',
					'transitionDuration',
				],
				oe = (0, A.ZP)('div', {
					name: 'MuiBackdrop',
					slot: 'Root',
					overridesResolver: (e, t) => {
						const { ownerState: n } = e;
						return [t.root, n.invisible && t.invisible];
					},
				})((e) => {
					let { ownerState: t } = e;
					return (0, p.Z)(
						{
							position: 'fixed',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							right: 0,
							bottom: 0,
							top: 0,
							left: 0,
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							WebkitTapHighlightColor: 'transparent',
						},
						t.invisible && { backgroundColor: 'transparent' }
					);
				}),
				re = f.forwardRef(function (e, t) {
					var n, o, r;
					const i = (0, D.Z)({ props: e, name: 'MuiBackdrop' }),
						{
							children: s,
							className: a,
							component: l = 'div',
							components: c = {},
							componentsProps: u = {},
							invisible: f = !1,
							open: h,
							slotProps: E = {},
							slots: v = {},
							TransitionComponent: b = Q,
							transitionDuration: x,
						} = i,
						g = (0, d.Z)(i, ne),
						y = (0, p.Z)({}, i, { component: l, invisible: f }),
						k = ((e) => {
							const { classes: t, invisible: n } = e,
								o = { root: ['root', n && 'invisible'] };
							return (0, S.Z)(o, te, t);
						})(y),
						R = null != (n = E.root) ? n : u.root;
					return (0, T.jsx)(
						b,
						(0, p.Z)({ in: h, timeout: x }, g, {
							children: (0, T.jsx)(
								oe,
								(0, p.Z)({ 'aria-hidden': !0 }, R, {
									as: null != (o = null != (r = v.root) ? r : c.Root) ? o : l,
									className: (0, m.Z)(
										k.root,
										a,
										null == R ? void 0 : R.className
									),
									ownerState: (0, p.Z)(
										{},
										y,
										null == R ? void 0 : R.ownerState
									),
									classes: k,
									ref: t,
									children: s,
								})
							),
						})
					);
				});
			function ie(e) {
				return (0, ee.Z)('MuiModal', e);
			}
			const se = (0, $.Z)('MuiModal', ['root', 'hidden', 'backdrop']),
				ae = [
					'BackdropComponent',
					'BackdropProps',
					'classes',
					'className',
					'closeAfterTransition',
					'children',
					'container',
					'component',
					'components',
					'componentsProps',
					'disableAutoFocus',
					'disableEnforceFocus',
					'disableEscapeKeyDown',
					'disablePortal',
					'disableRestoreFocus',
					'disableScrollLock',
					'hideBackdrop',
					'keepMounted',
					'onBackdropClick',
					'onClose',
					'onTransitionEnter',
					'onTransitionExited',
					'open',
					'slotProps',
					'slots',
					'theme',
				],
				le = (0, A.ZP)('div', {
					name: 'MuiModal',
					slot: 'Root',
					overridesResolver: (e, t) => {
						const { ownerState: n } = e;
						return [t.root, !n.open && n.exited && t.hidden];
					},
				})((e) => {
					let { theme: t, ownerState: n } = e;
					return (0, p.Z)(
						{
							position: 'fixed',
							zIndex: (t.vars || t).zIndex.modal,
							right: 0,
							bottom: 0,
							top: 0,
							left: 0,
						},
						!n.open && n.exited && { visibility: 'hidden' }
					);
				}),
				ce = (0, A.ZP)(re, {
					name: 'MuiModal',
					slot: 'Backdrop',
					overridesResolver: (e, t) => t.backdrop,
				})({ zIndex: -1 }),
				ue = f.forwardRef(function (e, t) {
					var n, o, r, i, s, a;
					const l = (0, D.Z)({ name: 'MuiModal', props: e }),
						{
							BackdropComponent: c = ce,
							BackdropProps: u,
							className: h,
							closeAfterTransition: E = !1,
							children: v,
							container: b,
							component: g,
							components: y = {},
							componentsProps: k = {},
							disableAutoFocus: Z = !1,
							disableEnforceFocus: P = !1,
							disableEscapeKeyDown: C = !1,
							disablePortal: w = !1,
							disableRestoreFocus: O = !1,
							disableScrollLock: M = !1,
							hideBackdrop: A = !1,
							keepMounted: F = !1,
							onBackdropClick: L,
							open: j,
							slotProps: B,
							slots: U,
						} = l,
						K = (0, d.Z)(l, ae),
						_ = (0, p.Z)({}, l, {
							closeAfterTransition: E,
							disableAutoFocus: Z,
							disableEnforceFocus: P,
							disableEscapeKeyDown: C,
							disablePortal: w,
							disableRestoreFocus: O,
							disableScrollLock: M,
							hideBackdrop: A,
							keepMounted: F,
						}),
						{
							getRootProps: W,
							getBackdropProps: H,
							getTransitionProps: V,
							portalRef: Y,
							isTopModal: q,
							exited: z,
							hasTransition: G,
						} = R((0, p.Z)({}, _, { rootRef: t })),
						X = (0, p.Z)({}, _, { exited: z }),
						J = ((e) => {
							const { open: t, exited: n, classes: o } = e,
								r = {
									root: ['root', !t && n && 'hidden'],
									backdrop: ['backdrop'],
								};
							return (0, S.Z)(r, ie, o);
						})(X),
						Q = {};
					if ((void 0 === v.props.tabIndex && (Q.tabIndex = '-1'), G)) {
						const { onEnter: e, onExited: t } = V();
						(Q.onEnter = e), (Q.onExited = t);
					}
					const $ =
							null !=
							(n = null != (o = null == U ? void 0 : U.root) ? o : y.Root)
								? n
								: le,
						ee =
							null !=
							(r =
								null != (i = null == U ? void 0 : U.backdrop) ? i : y.Backdrop)
								? r
								: c,
						te = null != (s = null == B ? void 0 : B.root) ? s : k.root,
						ne = null != (a = null == B ? void 0 : B.backdrop) ? a : k.backdrop,
						oe = x({
							elementType: $,
							externalSlotProps: te,
							externalForwardedProps: K,
							getSlotProps: W,
							additionalProps: { ref: t, as: g },
							ownerState: X,
							className: (0, m.Z)(
								h,
								null == te ? void 0 : te.className,
								null == J ? void 0 : J.root,
								!X.open && X.exited && (null == J ? void 0 : J.hidden)
							),
						}),
						re = x({
							elementType: ee,
							externalSlotProps: ne,
							additionalProps: u,
							getSlotProps: (e) =>
								H(
									(0, p.Z)({}, e, {
										onClick: (t) => {
											L && L(t), null != e && e.onClick && e.onClick(t);
										},
									})
								),
							className: (0, m.Z)(
								null == ne ? void 0 : ne.className,
								null == u ? void 0 : u.className,
								null == J ? void 0 : J.backdrop
							),
							ownerState: X,
						});
					return F || j || (G && !z)
						? (0, T.jsx)(I, {
								ref: Y,
								container: b,
								disablePortal: w,
								children: (0, T.jsxs)(
									$,
									(0, p.Z)({}, oe, {
										children: [
											!A && c ? (0, T.jsx)(ee, (0, p.Z)({}, re)) : null,
											(0, T.jsx)(N, {
												disableEnforceFocus: P,
												disableAutoFocus: Z,
												disableRestoreFocus: O,
												isEnabled: q,
												open: j,
												children: f.cloneElement(v, Q),
											}),
										],
									})
								),
						  })
						: null;
				}),
				de = ue;
		},
	},
]);
//# sourceMappingURL=414.55a8bef8.chunk.js.map
