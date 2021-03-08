/*!
 *
 * Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
 * Requires jQuery and Mapael >=2.0.0
 *
 * Map of west_midlands_county
 * 
 * @author rcrowther
 */
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('jquery-mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.mapael);
    }
}(function ($, Mapael) {

    "use strict";
    
    $.extend(true, Mapael,
        {
            maps :  {
                west_midlands_county : {
                    width : 1360.2802,
                    height : 876.08313,
                    getCoords : function (lat, lon) {
                        // todo
                        return {"x" : long, "y" : lat};
                    },
                    'elems': {
                        "Birmingham" : "m 716,445.17 c 19.32,9.28 60.67,-4.76 65.28,16.89 -19.51,21.52 -1.31,36.51 -2.49,61.8 11.51,17.56 -22.79,25.82 -0.43,41.84 15.76,32.16 -42.03,28.96 -58.69,16.28 -22.32,-30.21 -27.27,23.62 -34.68,37.92 -7.47,23.66 -29.21,34.72 -38.34,59.86 -8.33,25.68 -44.35,29.02 -55.55,25.07 -4.06,11.98 -25.47,39.92 -34.43,15.11 -15.5,-0.67 -38.66,4.66 -48.45,-7.84 -2.13,22.61 -28.49,43.13 -39.84,51.32 -15.08,-6.82 -30.55,-20.68 -38.88,-0.61 -11,-16.4 -26.32,8.1 -43.96,5.66 -11.12,28.16 -45.76,6.75 -49.62,-12.19 -5.83,-14.15 -15.41,-28.91 -33.42,-29.79 -3.27,-30.14 33.39,0.48 35.23,-22.27 17.19,2.45 30.45,-3.78 44.92,-18.71 -21.52,12.48 -25.7,-28.33 -36.85,-31.19 -21.24,3.15 -21.61,-41.1 -9.64,-60.78 2.51,-21.77 -2.97,-42.99 27.3,-38.69 22.07,-0.21 62.9,-26.86 50.87,-36.73 1.35,-25.76 35.29,-8.26 37.09,-33.71 11.1,-6.21 -3.31,-23.13 13.14,-27.81 -20.77,-4.16 -47.62,-14.38 -38.71,-35.61 -0.6,-16.49 9.98,-30.93 -0.19,-48.71 2.81,-12.14 22.39,9.66 25.87,-12.72 15.47,0.12 35.73,13.97 29.31,-13.17 2.43,-15.83 -12.23,-24.92 11.2,-21.07 19.01,-14.63 42.02,-24.27 55.65,-45.77 25.08,-12.35 22.28,-38.98 31.98,-61.03 16.92,-16.67 24,-41.21 42.64,-56.15 21.75,-11.61 45.37,-12.65 66.09,2.23 30.42,7.66 33.26,40.63 46.08,61.73 7.31,13.67 12.85,20.8 27.34,21.73 14.83,13.1 -2.77,11.92 -9.5,24.79 15.34,6.96 9.37,28.62 31.12,27.96 -1.75,27.26 22.64,36.75 8.83,57.5 1.96,16.95 20.45,-4.93 21.32,14.38 17.15,-0.27 19.56,20.22 2.01,18.34 -18.42,6.34 -40.79,2.87 -30.48,25.03 -23.1,-9.86 -53.01,9.27 -69.2,17.26 -8.84,1.86 -11.79,15.49 0.08,11.84 z",
                        "Wolverhampton" : "m 113.86,290.44 c -4.14,13.12 -17.31,8.78 -26.78,13.21 -5.89,-5.58 -16.15,-6.53 -18.2,-0.2 -4.38,-4.54 -8.51,-5.42 -13.09,-2.23 -10.02,-7.67 8.39,-27.08 -10.29,-29.01 1.6,-4.79 8.37,-9.6 2.65,-16.77 C 46.84,247.25 39.95,236.44 31.3,245.14 28.78,229.93 0.07,240.93 5.38,219.8 16.54,222.91 6.36,213.5 0.5,215.47 c 0.35,-3.13 10.07,-6.46 13.19,-9.67 12.28,7.68 22.47,-5.2 17.43,-17.73 -1.01,-10.99 -3.99,-23.59 -14.18,-29.22 6.42,-2.83 14.41,-12.5 19.29,-2.63 10.32,12.63 16.23,-10.18 26.31,-8.85 9.26,1.16 -6.79,-18.7 7.39,-16.27 3.49,-2.86 -13.04,-11.79 0.21,-11.03 10.04,4.95 4.85,-7.61 13.98,-8.48 6.42,-4.41 13.27,-5.3 8.89,-13.79 5.44,-14.16 26.33,2.82 31.61,-12.86 4.79,-9.16 7.04,-18.78 19.71,-13.36 10.68,-5.83 17.94,1.68 26.1,7.34 16.28,-8 17.3,13.26 18.71,23.89 -0.64,11.79 7.86,17.78 17.92,19.48 0.06,14.03 12.01,24.63 25.56,17.5 7.52,1.07 11.48,2.4 8.23,-6.57 -2.46,-12.91 18.93,-32.84 31.86,-15 -1.32,0.84 -11.33,7.61 -0.76,10.39 2.91,15.81 -4.88,29.27 -7.8,44.18 -3.03,11.16 -24.07,2.74 -19.87,16.64 -6.95,0.33 -7.04,1.29 -8.96,4.51 -2.98,6.77 -5.1,13.65 -10.77,20.45 12.44,3.44 20.24,14.46 31.54,20.36 9.78,4.56 -2.78,15.36 11.93,17.25 5.2,0.69 -2.35,15.11 -5.83,19.45 -6.55,4.31 5.34,15.54 -7.96,16.26 8.48,4.32 25.18,15.35 13.12,27.16 -7.85,5.73 -14.92,7.11 -21.8,3.49 -9.35,7.17 -7.36,-7.51 -16.48,-5.7 1.18,-10.64 -12.13,-27.21 -12.2,-7.31 -5.62,1.53 -6.95,5.18 -11.9,8.03 -3.76,3.51 -15.66,15.01 -26.22,11.79 -6.25,0.18 -7.74,9.92 -9.31,1.11 -12.58,-4.96 -14.26,-19.91 -20.96,-29.52 -4.92,-6.07 -15.3,-7.41 -11.58,2.53 -7.53,13.38 -16.06,-6.44 -23.06,-8.84 z",
                        "Coventry" : "m 1213.75,798.38 c -1.23,16.22 -14.84,21.31 -21.14,5.02 2.95,-15.18 -17.85,-14.12 -23.13,-7.52 -9.8,-1.66 -16.99,16.78 -18.77,21.05 8.33,6.12 -3.21,13.91 -8.96,7.94 -4.67,15.75 -25.21,-9.65 -12.35,-11.4 9.34,-15.37 -15.68,-13.98 -13.14,-30.29 -2.11,-8.84 -9.81,-11.16 -13.19,-4.63 -11.29,-1.25 -18.41,-9.38 -31.59,-9.97 -10.89,-3.61 -28.34,-0.45 -18.33,-14.1 -4.44,-9.13 -9.53,-30.85 -3.87,-35.31 -12.97,-4.31 -4.04,-1.47 -3.88,-11.32 2.43,-13.06 4.82,-28.94 -8.82,-39.04 16.52,-9.6 -16.33,-9.91 -2.81,-23.83 5.33,0.98 6.56,-1 6.56,-1 2.68,-4.35 -8.44,-12.21 -1.65,-20.52 1.68,-2.48 4.15,-3.91 7.62,-4.4 5.25,-0.75 11.18,5 14,1.83 9.48,-13.87 1.15,-27.32 2.94,-41.66 -4.48,-9.07 -1.4,-24.75 12.69,-17.27 14.42,7.77 30.57,12.35 46.64,14.41 13.94,-1.55 22.97,-10.81 31.86,-21.45 12.65,-6.34 10.82,20.08 25.75,18.7 8.74,3.74 20.6,-5.21 14.07,7.65 12.28,10.61 39.62,15.44 47.2,-3.55 -3.83,-16.16 13.38,-4.49 22.13,-6.3 12.05,7.21 35.29,-12.49 34.51,11.9 6.24,9.08 23.5,10.9 26.53,18.87 -10.17,17.85 21.09,21.57 30.67,30.97 11.6,9.54 -2.91,25.26 -3.79,37.33 -3.76,11.54 -7.84,23.49 -16.09,32.68 4.78,15.16 21.26,33.1 5.36,47.49 -11.52,15.85 -28.18,27.06 -46.08,34.48 -5.06,6.37 6.33,23.89 -7.93,17.4 2.33,-20.79 -23.6,12.15 -29.02,-6.19 -13.63,0.42 -33.66,-8.56 -44,2.03 z",
                        "Dudley" : "m 72.34,647.12 c -9.56,-22.85 -16.36,-46.89 -19.92,-71.41 1.29,-15.48 13.4,-32.81 12.64,-45.36 -13.07,-4.64 -16.63,-21.89 -16.08,-34.67 4.92,-14.68 -14.78,-22.88 -15.76,-32.08 10.71,-9.5 -4.16,-17.48 -5.42,-20.16 9.11,-3.43 1.66,-17.03 14.67,-17.81 14.06,-9.11 31.07,-12.83 47.53,-14.43 17.23,9.55 25.72,-21.12 9.46,-25.92 -10.95,-6.75 11.73,-15.06 15.45,-21.46 12.88,-8.36 8.26,-31.22 3.65,-43.98 3.16,-8.9 8.31,-17.88 17.87,-18.56 -0.75,-22.92 20.25,4.34 22.01,14.87 2.15,9.24 11.19,6.13 12.87,14.09 6.81,-8.93 21.96,-2.69 25.72,-10.09 8.34,-4.23 7.92,-14.62 19.3,-13.2 -0.63,-10.4 7.77,-17.53 10.74,-3.48 5.7,16.88 7.95,34.84 1.02,51.09 -2.82,4.42 -11.59,-2.14 -4.36,7.92 -1.82,11.14 -9.52,25.57 7.17,26.16 10.69,10.43 16.86,26.19 27.27,34.33 -13.13,5.88 -0.09,20.41 -9.62,29.37 -6.98,6.36 -19.09,24.76 -2.96,33.4 2.33,8.44 -10.9,5.09 -6.83,15.36 -5.36,8.98 -7.33,16.67 -18.57,16.3 -9.37,11.15 -28.93,3.07 -29.98,21.5 8.5,5.06 23.76,4.5 28.91,16.38 12.18,-9.08 10.67,14.03 24.16,5.06 18.17,0.18 31.39,-10.65 37.4,-26.17 10.9,-11.73 28.57,-13.69 38.85,-27.19 5.04,17.83 21.16,32.25 16.98,52.35 2.48,15.16 -0.75,17.48 -0.14,33.8 -7.17,8.96 -9.62,36.47 -7.36,45.5 -19.18,-11.31 -11.96,11.09 -22.06,15.29 -17.72,7.88 -12.12,-16.03 -16.46,-26.46 7.22,-9.81 0.72,-14.08 -9.12,-8.37 -9.71,2.95 -29.22,-9.46 -26.04,9.89 7.63,10.63 -6.46,38.22 -10.69,18.26 14.78,-7.04 -7.68,-4.51 -4.43,-13.02 -8.95,7.26 -15.05,-0.1 -24.07,8.05 -14.6,-4.77 -7.33,-28.3 -20.82,-35.08 -6.55,-4.69 -27.49,3.73 -29.48,17.46 -8.6,15.01 -29.79,11.17 -35.91,24.14 -4.99,11.47 -22.99,12.12 -36.11,5.83 -7.11,-2.64 -14.03,-5.92 -21.49,-7.5 z",
                        "Solihull" : "m 716.54,444.9 c -13.72,3.19 -8.53,-7.69 -1.05,-11.44 6.47,-3.25 12.86,-6.75 17.16,-8.61 20.77,-9.21 44.72,-20.41 63.72,-0 18.54,19.35 19.09,48.19 37.54,67.73 17.71,15.75 31.34,33.24 31.53,57.79 12.66,22.05 32.9,39.89 42.27,63.79 5.29,14.77 37.67,27.48 33.96,0.76 3.82,-14.61 19.26,13.14 30.66,-0.16 19.32,-6.81 25.4,-33 37.8,-45.15 -11.68,-20.8 26.17,-20.65 25.32,-1.18 11.6,3.07 20.99,10.67 28.46,11.71 -1.23,13.29 9.43,52.85 -17.44,39.37 -22.38,4.82 7.21,29.71 -13.39,24.73 -13.26,14.43 19.92,13.12 2.58,25.08 23.58,10.19 2.04,37.99 13.91,49.53 -9.86,8.15 10.05,28.3 0.05,40.79 8.29,9.25 -22.88,15.39 -7.92,29.63 2.41,16.73 -21.93,8.7 -19.31,12.78 9.63,15.08 -24.1,4.47 -8.85,17.2 7.85,10.91 -25.38,5.18 -32.92,15.93 -8.8,4.73 -13.5,27.89 -19.22,6.98 -10.88,-22.26 -36.4,-8.93 -54.57,-7.27 5.87,13.15 -14.59,43.63 -21.5,22.34 -13.66,2.98 -26.83,-5.82 -37.64,-8.79 -5.36,10.97 -1.71,-22.85 1.51,-31.11 -1.9,-15.62 -20.2,0.78 -30.24,-2.4 -6.8,15.63 -7.35,53.38 -33.37,37.7 -16.19,-4.53 -3.85,-30.64 -27.07,-22.35 -22.95,-14.74 -23.62,24.84 -3.07,25.89 2.63,0.13 0.24,4.76 3.07,4.46 -4.74,4.65 -9.97,7.72 -8.78,11.86 -4.44,8.57 -26.17,-2.59 -16.29,-8.55 -11.05,-16.31 -34.73,-18.31 -40.69,-39.8 -21.45,4.95 -42.41,-5.19 -61.66,3.78 -11.93,-8.05 -42.79,0.37 -47.17,-10.59 14.51,-14.5 13.08,-36 22.99,-51.88 10.83,-10.5 33.1,-39.76 5.1,-39.03 -14.75,-5.89 -34.01,-1.53 -21.33,-21.05 37.81,2.3 45.57,-10.19 53.83,-20.52 11.2,-26.84 22.34,-33.03 32.84,-48.6 13.52,-17.17 15.86,-56.9 30,-64.26 12.52,4.43 13.75,17.61 37.16,18.86 28,1.93 46.41,-6.1 31.85,-28.32 -18.26,-12.19 15.92,-24.91 2.14,-38.71 4.7,-21.01 -18.14,-36.73 3.72,-62.06 -7.55,-20.39 -42.04,-9.16 -65.64,-16.85 z",
                        "Walsall" : "m 270.33,306.57 c -3.25,-5 -13.35,-19.02 -15.06,-18.17 10.03,-2.69 5.24,-8.95 4.99,-15.29 7.03,-6.29 12.97,-21.75 8.85,-21.36 -4.37,0.41 -5.41,-1.28 -9.17,-3.99 1.99,-6.66 2.35,-13.38 -7.91,-15.44 -8.65,-8.24 -18.92,-10.85 -27.18,-18.11 8.13,-7.75 7.13,-23.22 19.37,-24.37 -3.38,-14.7 22.41,-4.28 21.49,-21.48 1.87,-12.94 11.29,-27.64 5.95,-39.8 -12.28,-7.28 11.08,-16.6 17.99,-7.84 8.09,3.97 23.2,12.41 11.49,-1.71 -4.87,-11.82 9.35,-15.82 17.52,-15.12 11.04,-14.97 24.03,-29.11 42.28,-33.96 11.16,-2.48 14.92,6.25 20.85,-6.47 9.22,0.77 19.16,-0.18 29.77,-3.21 16.86,2.77 19.65,-15.59 14.91,-29.98 2.02,-11.87 16.58,-3.13 7.32,-15.93 -10.34,-10.94 4.97,-20.6 11.34,-7.61 9.38,11.13 17.8,17.76 25.85,1 10.12,-7.35 17.46,23.84 30.24,7.54 11.98,-6.13 23.31,13.81 6,13.57 -19.61,14.63 31.69,22.58 9.91,36.59 -10.41,7.42 -14.03,15.94 -1,22.48 12.42,14.88 31.99,24.03 39.64,43.11 14.23,19.04 -23.59,41.9 -0.08,54.51 5.6,12.01 19.21,26 22.81,34.08 -8.85,17.15 -6.44,47.41 -30.9,59.64 -6.02,10.01 -33.58,33.43 -49.51,41.17 -5.11,-9.85 -18.37,-14.04 -23.26,-20.37 -1.98,-2.56 -1.82,-7.43 -0.84,-10.71 -7.03,-8.89 -21.36,-0.52 -28.95,6.1 -7.2,-1.69 2.04,-18.5 -11.46,-14.66 -6.17,0.01 -21.12,-6.69 -17.58,6.95 -13.64,-6.82 -12.34,18.88 -19.77,4.54 -11.1,-8.31 -21.53,-17.78 -35.73,-19.97 -14.56,-7.3 -28.64,-15.24 -43.62,-3.46 -3.63,10 -7.54,17.73 -19.65,20.92 -5.13,7.83 -16.39,22.99 -26.91,16.78 z",
                        "Sandwell" : "m 331.7,261.98 c -5.99,0.18 -12.69,2.7 -16.28,7.53 -2.99,8.6 -8.82,16.7 -18.03,19.09 -6.32,6.39 -11.36,16.43 -21.13,18 -3.11,-0.79 -7.81,-0.24 -7.25,3.94 -4.64,7.63 -14.88,10.02 -23.06,7.28 -2.78,0.31 -6.09,2.62 -7.81,-1.03 -1.87,-2.35 -5.57,-7.65 -8.75,-4.25 0.27,8.51 2.49,17.28 1.33,26 -0.52,5.38 -1.39,11.76 -4.64,16.1 -3.12,-0.33 -7.84,1.53 -5.19,5.34 3.15,5.42 -1.56,11.82 -1.53,17.84 -1.53,6.63 4.47,12.08 10.75,12.19 10.14,9.51 15.91,23.01 26.06,32.69 -9.13,5.46 -3.07,17.78 -6.31,25.81 -6.51,8.4 -16.12,18.2 -12.5,29.84 0.94,3.97 5.89,5.87 7,9.13 -0.29,4.92 -9.16,5.25 -7.06,11.28 -1.01,6.65 -5.48,13.3 -11.34,16.56 -3.49,1.08 -7.47,0.99 -10.06,4.16 -8.16,5.24 -22.21,3.42 -25.91,14.56 -1.95,3.82 0.54,7.87 4.79,8.11 8.6,2.7 18.25,5.23 23.55,12.96 3.26,1 7.71,-2.42 10.06,1.75 3.1,4.11 8.1,8.89 13.47,5.56 9.87,-1.7 20.41,-3.25 27.88,-10.69 8.66,-6.47 10.35,-19.02 20.63,-23.69 9.79,-5.75 20.88,-10.25 28.75,-18.75 5.61,15.78 18.37,29.97 16.53,47.69 0.97,3.92 -1.26,8.71 0.53,12.19 4.98,1.43 3.87,-6.27 6.81,-8.72 6.4,-7.29 17.48,-3.36 25.97,-5.06 17.18,-3.56 33.98,-12.07 45.5,-25.5 3.05,-3.53 4.19,-8.81 1.25,-12.59 0.07,-6.83 5.31,-12.05 11.75,-13.41 9.1,-2.74 21.36,-4.17 24.44,-15 -0.05,-5.06 5.96,-7.57 5.31,-12.97 0.85,-5.87 -1.59,-14.25 5.03,-17.41 2.42,-4.91 -5.75,-4.61 -8.63,-5.97 -10.42,-3.68 -23.73,-7.71 -27.53,-19.31 -1.7,-7.78 1.83,-15.46 2.08,-23.3 2.46,-12.27 5.21,-25.83 -0.86,-37.48 -0.14,-4.55 6.52,-1.89 9.08,-1.98 5.55,1.81 13.04,0.8 14.89,-5.65 0.38,-4.11 3.36,-4.24 6.84,-3.22 7.43,0.67 16.64,5.43 23.19,-0.03 4.22,-6.69 0.04,-14.85 0.63,-22.22 0.14,-4.3 -3.13,-9.31 -1.41,-13.19 5.5,-1.59 12.43,2.38 16.72,-3.19 2.65,-1.16 3.63,-4.97 0.56,-6.22 -3.59,-6.26 -9.57,-10.75 -16.41,-13.25 -4.3,-1.6 -7.28,-5.52 -5.94,-10.25 1.51,-8.41 -9.24,-12.13 -15.47,-8.5 -5.7,1.87 -10.6,6.34 -15.44,9.19 -3.17,-4.3 0.47,-13.81 -6.81,-14.72 -7.11,1.45 -14.85,-3.46 -21.44,0.34 -3.14,1.57 0.1,7.83 -4.19,6 -6.06,-0.55 -8.24,6.53 -11.75,9.59 -3.7,-2.77 -6.64,-7.22 -11,-9.5 -8.81,-7.13 -19.05,-12.27 -29.83,-15.38 -8.94,-3.55 -17.74,-9.19 -27.82,-8.31 z"
                    }
                }
            }
        }
    );

    return Mapael;

}));