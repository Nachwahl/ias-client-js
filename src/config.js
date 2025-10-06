  /*
  Copyright (C) 2016-2025 zafaco GmbH

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License version 3 
  as published by the Free Software Foundation.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with this program.  If not, see <http:   //www.gnu.org/licenses/>.
*/

var WSConfig = function ()
{
    return (this);
};


WSConfig.prototype.getMeasurementParameters = function (testCase, platform)
{
    var measurementParameters = {};

    measurementParameters.cmd      = 'start';
    measurementParameters.platform = platform;

    measurementParameters.wsTargets = [];
    measurementParameters.wsTargets.push('peer');

    measurementParameters.wsTLD        = 'bbt.robinferch.me';
    measurementParameters.wsTargetPort = '443';
    measurementParameters.wsWss        = 1;

    measurementParameters.wsWorkerPath               = 'worker.js';
    measurementParameters.performRouteToClientLookup = true;

    if (testCase === 'all')
    {
        measurementParameters.performRttMeasurement      = true;
        measurementParameters.performDownloadMeasurement = true;
        measurementParameters.performUploadMeasurement   = true;
    }

    if (testCase === 'rtt')
    {
        measurementParameters.performRttMeasurement = true;
    }

    if (testCase === 'download')
    {
        measurementParameters.performDownloadMeasurement = true;
    }

    if (testCase === 'upload')
    {
        measurementParameters.performUploadMeasurement = true;
    }

    return measurementParameters;
};
