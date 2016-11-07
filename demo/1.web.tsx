import * as React from 'react'
import {observer} from 'mobx-react'
import Gaea from '../index'
import webBaseComponents from '../../gaea-web-components/index'
import GaeaCore from '../gaea-editor-core/gaea-editor.component'

const defaultValue = `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`

@observer
export default class Demo extends React.Component <any, any> {
    static title = 'Web 编辑器'
    static description = ``

    handleSave(value: string) {
        console.log(value)
    }

    render() {
        return (
            <div style={{border: '1px solid #eee',height:400}}>
                <GaeaCore commonComponents={webBaseComponents}/>
            </div>
        )
    }
}
//
// <Gaea baseComponents={webBaseComponents}
//       defaultValue={defaultValue}
//       onSave={this.handleSave.bind(this)}/>
                