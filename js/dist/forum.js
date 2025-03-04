import { extend } from 'flarum/common/extend';
import Editor from 'flarum/common/components/Editor';
import Button from 'flarum/common/components/Button';

app.initializers.add('html-editor', () => {
    extend(Editor.prototype, 'toolbarItems', items => {
        items.add('html', Button.component({
            icon: 'fas fa-code',
            label: 'HTML',
            onclick: () => {
                const editor = app.editor;
                const selection = editor.codemirror.getSelection();
                const text = `<html>${selection}</html>`;

                editor.codemirror.replaceSelection(text);
            }
        }));
    });
});
