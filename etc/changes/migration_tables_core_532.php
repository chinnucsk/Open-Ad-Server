<?php

/*
+---------------------------------------------------------------------------+
| OpenX v2.8                                                                |
| ==========                                                                |
|                                                                           |
| Copyright (c) 2003-2009 OpenX Limited                                     |
| For contact details, see: http://www.openx.org/                           |
|                                                                           |
| This program is free software; you can redistribute it and/or modify      |
| it under the terms of the GNU General Public License as published by      |
| the Free Software Foundation; either version 2 of the License, or         |
| (at your option) any later version.                                       |
|                                                                           |
| This program is distributed in the hope that it will be useful,           |
| but WITHOUT ANY WARRANTY; without even the implied warranty of            |
| MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the             |
| GNU General Public License for more details.                              |
|                                                                           |
| You should have received a copy of the GNU General Public License         |
| along with this program; if not, write to the Free Software               |
| Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA |
+---------------------------------------------------------------------------+
$Id: migration_tables_core_532.php 79311 2011-11-03 21:18:14Z chris.nutting $
*/

require_once(MAX_PATH.'/lib/OA/Upgrade/Migration.php');

class Migration_532 extends Migration
{

    function Migration_532()
    {
        //$this->__construct();

		$this->aTaskList_constructive[] = 'beforeAddField__clients__oac_adnetwork_id';
		$this->aTaskList_constructive[] = 'afterAddField__clients__oac_adnetwork_id';


		$this->aObjectMap['clients']['oac_adnetwork_id'] = array('fromTable'=>'clients', 'fromField'=>'oac_adnetwork_id');
    }



	function beforeAddField__clients__oac_adnetwork_id()
	{
		return $this->beforeAddField('clients', 'oac_adnetwork_id');
	}

	function afterAddField__clients__oac_adnetwork_id()
	{
		return $this->afterAddField('clients', 'oac_adnetwork_id');
	}

}

?>