import * as _shared_game_module__WEBPACK_IMPORTED_MODULE_0__ from '../../../../worker/shared/game-module.js';
import * as _tile_db__WEBPACK_IMPORTED_MODULE_1__ from '../../../../worker/modules/map/tile-db.js';
import * as game_framework__WEBPACK_IMPORTED_MODULE_2__ from '../../../../framework/index.js';
import * as _map_tile_lists_submodule__WEBPACK_IMPORTED_MODULE_3__ from '../../../../worker/modules/map/map-tile-lists.submodule.js';
import * as game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__ from '../../../../framework/src/utils/consts.js';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





var MapModule = /*#__PURE__*/function (_GameModule) {
  function MapModule() {
    var _this;
    _classCallCheck(this, MapModule);
    _this = _callSuper(this, MapModule);
    _this.tileTypes = [];
    _this.mapTiles = [];
    _this.mapTilesProcessed = [];
    _this.refreshTimeout = 0;
    _this.highlightResources = {};
    _this.highlightFilters = {};
    _this.mapCreationSettings = {
      level: 0
    };
    _this.mapTier = 0;
    _this.relevantMapVersion = 2;
    _this.currentMapVersion = null;
    _this.lists = new _map_tile_lists_submodule__WEBPACK_IMPORTED_MODULE_3__.MapTileListsSubmodule();
    _this.eventHandler.registerHandler('query-map-data', function () {
      _this.sendData();
    });
    _this.eventHandler.registerHandler('map-highlight-filter', function (payload) {
      // console.log('setHighLight: ', payload);
      if ('highlightUnexplored' in payload) {
        _this.highlightFilters['highlightUnexplored'] = payload.highlightUnexplored;
      }
      if ('effortMin' in payload) {
        _this.highlightFilters['effortMin'] = payload.effortMin;
      }
      if ('effortMax' in payload) {
        _this.highlightFilters['effortMax'] = payload.effortMax;
      }
      _this.sendData();
    });
    _this.eventHandler.registerHandler('query-map-list-highlighted-tiles', function (payload) {
      var data = _this.getHighlightedTiles();
      _this.eventHandler.sendData('map-list-highlighted-tiles', {
        tiles: data
      });
    });
    _this.eventHandler.registerHandler('map-highlight-resources', function (payload) {
      // console.log('setHighLight: ', payload);
      _this.highlightResources = {};
      payload.ids.forEach(function (id) {
        _this.highlightResources[id] = true;
      });
      _this.sendData();
    });
    _this.eventHandler.registerHandler('map-set-generated-level', function (payload) {
      // console.log('setGeneratedLevel: ', payload);
      _this.mapCreationSettings.level = Math.max(0, Math.min(Math.floor(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('max_map_level')), payload.level));
      _this.sendData();
      _this.sendGeneralData();
    });
    _this.eventHandler.registerHandler('map-query-general-data', function () {
      _this.sendGeneralData();
    });
    _this.eventHandler.registerHandler('map-generate-map', function (payload) {
      _this.purchaseMap();
      _this.sendData();
    });
    _this.eventHandler.registerHandler('query-map-tile-details', function (_ref) {
      var i = _ref.i,
        j = _ref.j;
      _this.sendDetails({
        i: i,
        j: j
      });
    });
    _this.eventHandler.registerHandler('toggle-map-tile-running', function (_ref2) {
      var i = _ref2.i,
        j = _ref2.j,
        flag = _ref2.flag;
      if (flag) {
        _this.stopRunningTiles(); // only one tile in single tile mode
      }
      _this.setTileRunning(i, j, flag);
    });
    return _this;
  }
  _inherits(MapModule, _GameModule);
  return _createClass(MapModule, [{
    key: "initialize",
    value: function initialize() {
      this.tileTypes = (0,_tile_db__WEBPACK_IMPORTED_MODULE_1__.registerTileTypesDB)();
      this.generateMap();
    }
  }, {
    key: "generateMap",
    value: function generateMap() {
      var tier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      for (var i = 0; i < 15; i++) {
        this.mapTiles[i] = [];
        for (var j = 0; j < 15; j++) {
          if (i === 7 && j === 7) {
            this.mapTiles[i][j] = {
              i: i,
              j: j,
              distance: 0,
              metaData: {
                id: 'settlement',
                name: 'Settlement',
                color: '#666'
              },
              drops: [],
              costMult: 0,
              r: []
            };
          } else {
            this.mapTiles[i][j] = this.generateRandomTile(i, j, tier);
          }
        }
      }
      this.currentMapVersion = this.relevantMapVersion;
      this.mapTier = tier;
      this.processTiles();
    }
  }, {
    key: "generateRandomTile",
    value: function generateRandomTile(i, j, tier) {
      var expectType = Math.floor(Math.pow(Math.random(), 1.5) * this.tileTypes.length);
      var distance = Math.sqrt(Math.pow(i - 7, 2) + Math.pow(j - 7, 2));
      var metaData = this.tileTypes[expectType];
      var resources = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.listResourcesByTags(['gatherable']);
      var complexity = Math.max(1, distance - 2 + (Math.random() + 0.75 * Math.pow(tier, 0.5)) * (distance - 2 + 3 * Math.pow(tier, 0.5))) * Math.pow(1.3, tier);
      return {
        distance: distance,
        i: i,
        j: j,
        metaData: metaData,
        drops: this.generateRandomDrop(distance, complexity, metaData.id, resources),
        costMult: Math.pow(complexity, 1.75)
      };
    }
  }, {
    key: "stopRunningTiles",
    value: function stopRunningTiles() {
      var _this2 = this;
      var activeEntities = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.listEntitiesByTags(['exploration']);
      activeEntities.forEach(function (ent) {
        _this2.setTileRunning(ent.attributes.i, ent.attributes.j, false, 1);
      });
    }
  }, {
    key: "setTileRunning",
    value: function setTileRunning(i, j, flag) {
      var effort = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var runningEntityId = "tile_".concat(i, "_").concat(j, "_exploration");
      var tileData = this.mapTilesProcessed[i][j];
      var isRunning = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.entityExists(runningEntityId);
      this.mapTiles[i][j].isRunning = flag;
      this.mapTiles[i][j].effort = effort;
      if (!flag) {
        if (isRunning) {
          game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.unsetEntity(runningEntityId);
        }
      }
      if (flag) {
        if (!isRunning) {
          game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.registerGameEntity(runningEntityId, {
            name: "Map Exploration: ".concat(i, ":").concat(j),
            tags: ["map", "tile", "exploration"],
            unlockCondition: function unlockCondition() {
              return true;
            },
            level: 1,
            maxLevel: 1,
            attributes: {
              i: i,
              j: j
            },
            effectFactor: effort,
            resourceModifier: {
              consumption: {
                resources: {
                  'gathering_effort': {
                    A: 0,
                    B: tileData.cost.gathering_effort.value,
                    type: 0
                  }
                }
              },
              effectDeps: ['gathering_efficiency']
            }
          });
          game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.setEntityLevel(runningEntityId, 1, true);
        }
      }
      this.processTiles();
      this.sendData();
    }
  }, {
    key: "generateRandomDrop",
    value: function generateRandomDrop(distance, complexity, expectType, resources) {
      // Filter resources to match the expected tile type
      var potentialResources = resources.filter(function (one) {
        return !one.allowedTileTypes || one.allowedTileTypes.includes(expectType);
      });

      // If no matching resources, return an empty array
      if (potentialResources.length === 0) {
        return [];
      }

      // Separate resources by rarity
      var rarityBuckets = {
        low: potentialResources.filter(function (r) {
          return r.rarity <= 1;
        }),
        // rarity 0-1
        mid: potentialResources.filter(function (r) {
          return r.rarity >= 2 && r.rarity <= 3;
        }),
        // rarity 2-3
        high: potentialResources.filter(function (r) {
          return r.rarity >= 4 && r.rarity <= 5;
        }) // rarity 4-5
      };

      // console.log('rarityBuckets: ', rarityBuckets, potentialResources);

      // Ensure we have at least 1 resource with rarity 0-1
      var drops = [];
      if (rarityBuckets.low.length > 0) {
        for (var i = 0; i < Math.min(2, rarityBuckets.low.length); i++) {
          var lowRarityResource = rarityBuckets.low[Math.floor(Math.random() * rarityBuckets.low.length)];
          drops.push({
            id: lowRarityResource.id,
            amountMult: complexity / ((1 + lowRarityResource.rarity) * Math.pow(lowRarityResource.sellPrice, 0.05)),
            probabilityMult: Math.pow(complexity, 0.3) / ((1 + Math.pow(lowRarityResource.rarity, 0.5)) * Math.pow(lowRarityResource.sellPrice, 0.25))
          });
        }
      }

      // Determine how many more resources are needed (at least 3 in total)
      var remainingDropsCount = 5 - drops.length;

      // Add resources from other rarity levels
      var additionalDrops = [];
      for (var _i = 0; _i < remainingDropsCount; _i++) {
        var roll = Math.random();
        var bucket = void 0;
        if (roll < 0.75 && rarityBuckets.mid.length > 0) {
          // 50% chance to pick from rarity 2-3
          bucket = rarityBuckets.mid;
        } else if (roll < 0.95 && rarityBuckets.high.length > 0) {
          // 25% chance to pick from rarity 4-5
          bucket = rarityBuckets.high;
        } else if (rarityBuckets.low.length > 0) {
          // Default back to rarity 0-1 if no other buckets are valid
          bucket = rarityBuckets.low;
        }
        if (bucket && bucket.length > 0) {
          var selectedResource = bucket[Math.floor(Math.random() * bucket.length)];
          additionalDrops.push({
            id: selectedResource.id,
            amountMult: complexity / ((1 + selectedResource.rarity) * Math.pow(selectedResource.sellPrice, 0.05)),
            probabilityMult: Math.pow(complexity, 0.5) / ((1 + Math.pow(selectedResource.rarity, 0.5)) * Math.pow(selectedResource.sellPrice, 0.25))
          });
        }
      }

      // Combine the guaranteed low rarity drop and additional drops
      drops.push.apply(drops, additionalDrops);

      // Ensure unique drops (remove duplicates by ID)
      var uniqueDrops = Array.from(new Map(drops.map(function (r) {
        return [r.id, r];
      })).values());

      // Trim to exactly 3 drops
      return uniqueDrops.slice(0, 5);
    }
  }, {
    key: "getGatheringPerceptionEffect",
    value: function getGatheringPerceptionEffect() {
      return Math.pow(1 + game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource('gathering_perception').amount, 0.25);
    }
  }, {
    key: "processTiles",
    value: function processTiles() {
      var _this3 = this;
      this.mapTilesProcessed = [];
      this.filterableLoots = {};
      var _loop = function _loop(i) {
        _this3.mapTilesProcessed[i] = [];
        var _loop2 = function _loop2(j) {
          var _this3$mapTiles$i$j$r;
          var efficiency = 1;
          if (game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.entityExists("tile_".concat(i, "_").concat(j, "_exploration"))) {
            efficiency = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.getEntityEfficiency("tile_".concat(i, "_").concat(j, "_exploration"));
          }
          var effEff = Math.pow(efficiency, 0.5);
          var r = (_this3$mapTiles$i$j$r = _this3.mapTiles[i][j].r) !== null && _this3$mapTiles$i$j$r !== void 0 ? _this3$mapTiles$i$j$r : [];
          if (r.length && r.length > _this3.mapTiles[i][j].drops.length) {
            _this3.mapTiles[i][j].r = _toConsumableArray(new Set(r));
          }
          var isNoviceArea = Math.abs(i - 7) < 2 && Math.abs(j - 7) < 2;
          _this3.mapTilesProcessed[i][j] = _objectSpread(_objectSpread({}, _this3.mapTiles[i][j]), {}, {
            efficiency: efficiency,
            effEff: effEff,
            drops: _this3.mapTiles[i][j].drops.map(function (d, index) {
              var _this3$mapTiles$i$j$r2;
              var isRevealed = (_this3$mapTiles$i$j$r2 = _this3.mapTiles[i][j].r) === null || _this3$mapTiles$i$j$r2 === void 0 ? void 0 : _this3$mapTiles$i$j$r2.includes(index);
              var rs = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(d.id);
              var isHerb = rs.tags.includes('herb');
              var isRare = rs.tags.includes('rare');
              var amtHerbsMult = 1.;
              if (isHerb) {
                amtHerbsMult = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('gathering_herbs_amount');
                if (isRare) {
                  amtHerbsMult = 0.25 * Math.pow(amtHerbsMult, 0.5);
                }
              }
              var rarityProbMult = 1.;
              if (rs.rarity <= 2) {
                rarityProbMult *= Math.pow(game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('gathering_low_chance'), 1 / (1 + 0.25 * rs.rarity));
              }
              if (isRevealed) {
                if (!_this3.filterableLoots[d.id]) {
                  _this3.filterableLoots[d.id] = [];
                }
                _this3.filterableLoots[d.id].push({
                  i: i,
                  j: j
                });
              }
              var gatheringPerceptionEffect = _this3.getGatheringPerceptionEffect();
              var prob = 0.09 * d.probabilityMult * rarityProbMult * effEff * gatheringPerceptionEffect;
              if (prob > 0.2) {
                prob = Math.min(0.5, 0.2 + Math.pow(prob - 0.2, 1.5));
              }
              if (isRare && prob > 0.05) {
                prob = 0.05 + Math.pow(prob - 0.05, 2);
                if (prob > 0.1) {
                  prob = 0.1;
                }
              }
              return _objectSpread(_objectSpread({}, d), {}, {
                rarityTier: isRare ? 'rare' : 'common',
                probability: prob,
                amountMin: Math.max(1, 3 * d.amountMult * effEff * amtHerbsMult * (rs.lootAmountMult || 1)),
                amountMax: Math.max(1, 6 * d.amountMult * effEff * amtHerbsMult * (rs.lootAmountMult || 1)),
                isRevealed: isRevealed
              });
            }),
            cost: _defineProperty({}, 'gathering_effort', {
              name: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource('gathering_effort').name,
              value: _this3.mapTiles[i][j].costMult * (isNoviceArea ? 0.25 : 1)
            })
          });
        };
        for (var j = 0; j < _this3.mapTiles[i].length; j++) {
          _loop2(j);
        }
      };
      for (var i = 0; i < this.mapTiles.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "save",
    value: function save() {
      return {
        mapTiles: this.mapTiles,
        lists: this.lists.save(),
        mapCreationSettings: this.mapCreationSettings,
        currentMapVersion: this.currentMapVersion,
        highlightFilters: this.highlightFilters,
        mapTier: this.mapTier
      };
    }
  }, {
    key: "load",
    value: function load(obj) {
      this.currentMapVersion = obj === null || obj === void 0 ? void 0 : obj.currentMapVersion;
      if (obj !== null && obj !== void 0 && obj.mapCreationSettings) {
        this.mapCreationSettings = obj === null || obj === void 0 ? void 0 : obj.mapCreationSettings;
      }
      if (obj !== null && obj !== void 0 && obj.mapTiles && this.currentMapVersion && this.currentMapVersion >= this.relevantMapVersion) {
        this.mapTiles = obj.mapTiles;
        for (var i = 0; i < this.mapTiles.length; i++) {
          for (var j = 0; j < this.mapTiles[i].length; j++) {
            if (this.mapTiles[i][j].isRunning) {
              this.setTileRunning(i, j, true, this.mapTiles[i][j].effort);
            } else {
              this.setTileRunning(i, j, false, 1);
            }
          }
        }
        this.processTiles();
      } else {
        this.generateMap();
      }
      this.lists.load((obj === null || obj === void 0 ? void 0 : obj.lists) || {});
      this.highlightFilters = {};
      if (obj !== null && obj !== void 0 && obj.highlightFilters) {
        this.highlightFilters = obj.highlightFilters;
      }
      this.mapTier = obj === null || obj === void 0 ? void 0 : obj.mapTier;
    }
  }, {
    key: "mapGenerationCost",
    value: function mapGenerationCost() {
      var _this$mapCreationSett;
      var level = (_this$mapCreationSett = this.mapCreationSettings.level) !== null && _this$mapCreationSett !== void 0 ? _this$mapCreationSett : 0;
      var result = {
        isAffordable: true,
        consume: {}
      };
      result.consume['inventory_map_fragment'] = 10 * Math.pow(4, level) / game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('map_generation_discount');
      if (result.consume['inventory_map_fragment'] > game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource('inventory_map_fragment').amount) {
        result.isAffordable = false;
      }
      return result;
    }
  }, {
    key: "mapGenerationEffortBounds",
    value: function mapGenerationEffortBounds() {
      var _this$mapCreationSett2;
      var level = (_this$mapCreationSett2 = this.mapCreationSettings.level) !== null && _this$mapCreationSett2 !== void 0 ? _this$mapCreationSett2 : 0;
      var maxDist = 7 * Math.sqrt(2);
      var maxComplexity = Math.max(1, maxDist - 2 + (1 + 0.75 * Math.pow(level, 0.5)) * (maxDist - 2 + 3 * Math.pow(level, 0.5))) * Math.pow(1.3, level);
      var minComplexity = Math.max(1, (-1 + 0.75 * Math.pow(level, 0.5)) * (-1 + 3 * Math.pow(level, 0.5))) * Math.pow(1.3, level);
      var result = {
        min: 0.25 * Math.pow(minComplexity, 1.75),
        max: Math.pow(maxComplexity, 1.75)
      };
      return result;
    }
  }, {
    key: "purchaseMap",
    value: function purchaseMap() {
      var cost = this.mapGenerationCost();
      if (!cost.isAffordable) return;
      for (var rId in cost.consume) {
        game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.addResource(rId, -cost.consume[rId]);
      }
      this.lists.stopList();
      for (var lId in this.lists.mapLists) {
        this.lists.deleteMapTilesList(lId);
      }
      this.highlightResources = {};
      this.generateMap(this.mapCreationSettings.level);
    }
  }, {
    key: "isMapTileHighlighted",
    value: function isMapTileHighlighted(iRow, iCol) {
      var _this4 = this;
      var col = this.mapTilesProcessed[iRow][iCol];
      var hasHighlightResources = Object.keys(this.highlightResources).length > 0;
      var _this$highlightFilter = this.highlightFilters,
        highlightUnexplored = _this$highlightFilter.highlightUnexplored,
        effortMin = _this$highlightFilter.effortMin,
        effortMax = _this$highlightFilter.effortMax;
      var emptyConds = !hasHighlightResources && !highlightUnexplored && !effortMin && !effortMax;
      if (emptyConds) return false;
      var isHighlight = true;
      if (hasHighlightResources) {
        isHighlight = col.drops.some(function (drop) {
          return _this4.highlightResources[drop.id] && drop.isRevealed;
        });
        if (!isHighlight) return false; // Early exit optimization
      }
      if (highlightUnexplored) {
        var hasUnexplored = col.drops.some(function (drop) {
          return game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.isResourceUnlocked(drop.id) && !drop.isRevealed;
        });
        if (!hasUnexplored) return false;
      }
      if (effortMin) {
        if (col.cost['gathering_effort'].value < effortMin) return false;
      }
      if (effortMax) {
        if (col.cost['gathering_effort'].value > effortMax) return false;
      }
      return true;
    }
  }, {
    key: "getHighlightedTiles",
    value: function getHighlightedTiles() {
      var highlightedTiles = [];
      for (var iRow = 0; iRow < this.mapTilesProcessed.length; iRow++) {
        for (var iCol = 0; iCol < this.mapTilesProcessed[iRow].length; iCol++) {
          if (this.isMapTileHighlighted(iRow, iCol)) {
            highlightedTiles.push({
              iRow: iRow,
              iCol: iCol
            });
          }
        }
      }
      return highlightedTiles;
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this5 = this,
        _gameCore$getModule$p;
      var filterableLoot = Object.keys(this.filterableLoots).map(function (one) {
        return _objectSpread(_objectSpread({}, game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(one)), {}, {
          isSelected: _this5.highlightResources[one]
        });
      });
      return {
        mapTiles: this.mapTilesProcessed.map(function (row, iRow) {
          return row.map(function (col, iCol) {
            var isHighlighted = _this5.isMapTileHighlighted(iRow, iCol);
            return _objectSpread(_objectSpread({}, col), {}, {
              drops: col.drops.map(function (drop, index) {
                return _objectSpread(_objectSpread({}, drop), {}, {
                  resource: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(drop.id)
                });
              }),
              isHighlight: isHighlighted
            });
          });
        }),
        explorationPoints: _objectSpread(_objectSpread({}, game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource('gathering_effort')), {}, {
          isPinned: !!((_gameCore$getModule$p = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameCore.getModule('resource-pool').pinnedResources) !== null && _gameCore$getModule$p !== void 0 && _gameCore$getModule$p['gathering_effort'])
        }),
        mapLists: this.lists.getLists(),
        highlightFilters: this.highlightFilters,
        filterableLoot: filterableLoot
      };
    }
  }, {
    key: "sendGeneralData",
    value: function sendGeneralData() {
      var data = {
        mapGeneration: {
          isUnlocked: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.isResourceUnlocked('inventory_map_fragment'),
          level: this.mapCreationSettings.level,
          affordable: game_framework__WEBPACK_IMPORTED_MODULE_2__.resourceCalculators.isAffordable(this.mapGenerationCost().consume),
          maxLevel: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffectValue('max_map_level'),
          explorationBoundaries: this.mapGenerationEffortBounds()
        },
        isProducingGathering: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource('gathering_effort').income > game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER,
        stats: {
          effects: [{
            id: 'map_level',
            name: 'Map Level',
            value: this.mapTier
          }, _objectSpread(_objectSpread({}, game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('gathering_low_chance')), {}, {
            isMultiplier: true
          }), _objectSpread(_objectSpread({}, game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('gathering_herbs_amount')), {}, {
            isMultiplier: true
          }), _objectSpread(_objectSpread({}, game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource('gathering_perception')), {}, {
            isMultiplier: false,
            value: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource('gathering_perception').amount
          }), {
            id: 'perception_effect',
            name: 'Gathering Perception Effect',
            value: this.getGatheringPerceptionEffect(),
            description: 'Multiplier to find probabilities provided by Gathering Perception',
            isMultiplier: true
          }, _objectSpread(_objectSpread({}, game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEffects.getEffect('map_generation_discount')), {}, {
            isMultiplier: true
          })].filter(function (one) {
            return !one.isMultiplier && one.value > game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER || one.isMultiplier && Math.abs(one.value - 1) > game_framework_src_utils_consts__WEBPACK_IMPORTED_MODULE_4__.SMALL_NUMBER;
          })
        }
      };
      this.eventHandler.sendData('map-general-data', data);
    }
  }, {
    key: "sendData",
    value: function sendData() {
      var data = this.getData();
      // console.log('DATA: ', data);
      this.eventHandler.sendData('map-data', data);
    }
  }, {
    key: "getDetails",
    value: function getDetails(i, j) {
      console.log('GetDetails: ', i, j, this.mapTilesProcessed[i]);
      var tile = this.mapTilesProcessed[i][j];
      // console.log('Querying tile.drops: ', i, j, tile.drops, tile.drops.filter((drop, index) => (!tile.r?.includes(index)) && gameResources.isResourceUnlocked(drop.id)));

      return _objectSpread(_objectSpread({}, tile), {}, {
        name: tile.metaData.name,
        unlockedUnrevealedAmount: tile.drops.filter(function (drop, index) {
          var _tile$r;
          return !((_tile$r = tile.r) !== null && _tile$r !== void 0 && _tile$r.includes(index)) && game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.isResourceUnlocked(drop.id);
        }).length,
        drops: tile.drops.map(function (drop, index) {
          var _tile$r2;
          return _objectSpread(_objectSpread({}, drop), {}, {
            resource: game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.getResource(drop.id),
            isRevealed: ((_tile$r2 = tile.r) === null || _tile$r2 === void 0 ? void 0 : _tile$r2.includes(index)) && game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.isResourceUnlocked(drop.id)
          });
        }).filter(function (one) {
          return one.isRevealed;
        })
      });
    }
  }, {
    key: "sendDetails",
    value: function sendDetails(_ref3) {
      var i = _ref3.i,
        j = _ref3.j;
      var data = this.getDetails(i, j);
      this.eventHandler.sendData('map-tile-details', data);
    }
  }, {
    key: "tick",
    value: function tick(game, delta) {
      var _this6 = this;
      this.refreshTimeout -= delta;
      if (this.refreshTimeout <= 0) {
        this.processTiles();
        this.refreshTimeout = 2;

        // attempt to drop something
        var activeEntities = game_framework__WEBPACK_IMPORTED_MODULE_2__.gameEntity.listEntitiesByTags(['exploration']);
        activeEntities.forEach(function (ent) {
          var tile = _this6.mapTilesProcessed[ent.attributes.i][ent.attributes.j];
          tile.drops.forEach(function (drop, index) {
            if (!game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.isResourceUnlocked(drop.id)) {
              return;
            }
            var roll = Math.random();
            if (roll < 2 * drop.probability * ent.effectFactor) {
              var amt = Math.round(drop.amountMin + Math.random() * (drop.amountMax - drop.amountMin));
              game_framework__WEBPACK_IMPORTED_MODULE_2__.gameResources.addResource(drop.id, amt);
              if (!_this6.mapTiles[ent.attributes.i][ent.attributes.j].r) {
                _this6.mapTiles[ent.attributes.i][ent.attributes.j].r = [];
              }
              if (!_this6.mapTiles[ent.attributes.i][ent.attributes.j].r.includes(index)) {
                _this6.mapTiles[ent.attributes.i][ent.attributes.j].r.push(index);
              }
              // console.log(`Found ${drop.id} at ${ent.attributes.i}:${ent.attributes.j} with chance ${roll} < ${drop.probability}: ${amt}. EntEff: ${ent.efficiency}`, this.mapTiles[ent.attributes.i][ent.attributes.j]);
            }
          });
        });
      }
      this.lists.tick(game, delta);
    }
  }]);
}(_shared_game_module__WEBPACK_IMPORTED_MODULE_0__.GameModule);

export { MapModule };
